<template>
  <div>
    <div class="row custom-shadow bg-white relative-position">
      <div class="col-md-12 relative-position" style="min-height: 420px">
        <q-toolbar class="bg-white text-primary">
          <q-toolbar-title>
            <q-icon name="fas fa-calendar" color="secondary"/>
            {{$tr('qevent.sidebar.adminGroup')}}
          </q-toolbar-title>
        </q-toolbar>
        <q-list highlight no-border v-if="events.length > 0">
          <q-item
            v-for="(event, index) in events"
            :key="index">
            <q-item-section avatar>
              <q-icon name="fas fa-circle" size="10px" color="info"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{$trd(event.startDate)}}
              </q-item-label>
              <q-item-label caption>
                {{ event.summary | subStr }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-btn
                flat
                dense
                @click="()=>{openModal = true; eventSelected = event}"
                icon="chat_bubble" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list class="absolute-center full-width" highlight no-border v-else>
          <q-item>
            <q-item-section>
              <not-result />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <inner-loading :visible="visible"/>
      <eventModal
        v-if="openModal"
        :img="eventSelected.mainImage.path_string || eventSelected.mainImage.path"
        :event="eventSelected"
        :opened="openModal"
        @closeModal="openModal = false"/>
    </div>
  </div>
</template>

<script>
  import eventModal from '../eventModal'
  export default {
    components:{
      eventModal
    },
    props:{
      categoryId:{
        required: true,
      }
    },
    filters:{
      subStr: function(string) {
        return string.substring(0,45) + '...';
      }
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
          this.events = []
          this.visible = false
        })
      }
    }
  }
</script>
