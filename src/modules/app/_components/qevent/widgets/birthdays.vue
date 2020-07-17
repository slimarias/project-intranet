<template>
  <div>
    <div class="row q-mx-md q-my-md custom-shadow bg-white relative-position">
      <div class="col-md-12 relative-position" style="min-height: 420px">
        <q-list highlight no-border	>
          <q-list-header>
            <q-icon name="fas fa-birthday-cake" color="primary"/>
            {{$tr('qevent.sidebar.birthday')}}
          </q-list-header>
          <q-item
            v-for="(event, index) in events"
            :key="index">
            
            <q-item-side>
              <img
                :src="getUrlImg(event.smallImage)"
                class="avatar">
            </q-item-side>
            <q-item-main>
              <q-item-tile sublabel>
                {{$trd(event.fields.birthday.value) }}
              </q-item-tile>
              <q-item-tile label>
                {{event.title}}
              </q-item-tile>
            </q-item-main>
            <q-item-side right >
            
            </q-item-side>
          </q-item>
        </q-list>
      </div>
      <inner-loading :visible="visible"/>
      <eventModal
        v-if="openModal"
        :img="eventSelected.mainImage.path"
        :event="eventSelected"
        :opened="openModal"
        @closeModal="openModal = false"/>
    </div>
  </div>
</template>

<script>
  import eventModal from 'src/components/qevent/eventModal'
  export default {
    components:{
      eventModal
    },
    props:{
    
    },
    data(){
      return{
        openModal: false,
        eventSelected: {
          mainImage:{
            path:''
          }
        },
        visible: false,
        events: []
      }
    },
    created(){
      this.getEvent( false )
    },
    methods:{
      getEvent(refresh){

        let fields = [
          {name: 'cellularPhone', value: ''},
          {name: 'birthday', value: ''},
          {name: 'identification', value: ''},
          {name: 'mainImage', value: ''},
          {name: 'email', value: ''},
          {name: 'socialNetworks', value: []},
          {name: 'contacts', value: []},
          {name: 'products', value: []}
        ]
        
        this.visible = true
        let params = {
          refresh: refresh,
          params: {
            include: 'fields',
            take:5
          }
        }
        this.$crud.index('apiRoutes.qevent.birthdays', params)
        .then( response =>{
          this.events = Object.values(response.data).map( item => {
            return{
              smallImage: item.smallImage,
              title: item.title,
              fields: this.$helper.convertToFrontField(fields, item.fields),
            }
          })
          this.visible = false
        })
        .catch( error => {
          this.$alert.error({message : 'Error', timeOut : 4000})
          this.visible = false
        })
      },
      getUrlImg(uri){
        return `${config('apiRoutes.api.base_url')}/${uri}`
      },
      getField(fields){
        if (!fields.length){
          return {value: this.$tr('ui.message.notFound')}
        }
        return fields.find(field => {
          let response = field.name == 'birthday'
          return response
        })
      }
    }
  }
</script>
