<template>
  <div>
    <div class="row q-mx-md q-my-md custom-shadow bg-white relative-position">
      <div class="col-md-12 relative-position" style="min-height: 420px">
        <q-list highlight no-border	>
          <q-list-header>
            <q-icon name="fas fa-calendar" color="primary"/>
            {{$tr('qevent.sidebar.adminGroup')}}
          </q-list-header>
          <q-item
            v-for="(event, index) in events"
            :key="index">
            <q-item-side>
              <q-icon name="fas fa-circle" size="10px" color="info"/>
            </q-item-side>
            <q-item-main>
              <q-item-tile sublabel lines="2">
                {{$trd(event.startDate)}} - {{$trd(event.endDate)}}
              </q-item-tile>
              <q-item-tile label>
                {{event.title}}
              </q-item-tile>
            </q-item-main>
            <q-item-side right >
              <q-btn
                flat
                dense
                @click="openModal = true; eventSelected = event"
                icon="chat_bubble" />
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
        visible: true,
        events: []
      }
    },
    created(){
      this.getEvent( false )
    },
    methods:{
      getEvent(refresh){
        this.visible = true
        let params = {
          refresh: refresh,
          params: {
            take: 5,
            filter:{
              categories: parseInt(this.categoryId),
              orderByNow: true
            }
          }
        }
        this.$crud.index('apiRoutes.qevent.events', params)
        .then( response =>{
          this.events = response.data
          this.visible = false
        })
        .catch( error => {
          this.$alert.error({message : 'Error', timeOut : 4000})
          this.visible = false
        })
      }
    }
  }
</script>
