<template>
  <div class="row custom-shadow bg-white relative-position">
    <div class="col-md-12" style="min-height: 420px">
      <q-toolbar class="bg-white text-primary">
        <q-toolbar-title>
          <q-icon name="fas fa-calendar" color="secondary"/>
          {{$tr('qevent.sidebar.adminGroup')}}
        </q-toolbar-title>
      </q-toolbar>
      <div class="row q-col-gutter-md" v-if="events.length > 0">
        <div class="col-12 col-md-6" v-for="(event,index) in events" :key="index">
          <q-card flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs">{{ event.title }}</div>
                <div class="text-caption text-grey">
                  {{ event.summary | subStr }}
                </div>
              </q-card-section>
              <q-card-section class="col-5 flex flex-center">
                <q-img
                        class="rounded-borders"
                        :src="event.mainImage.path"
                />
              </q-card-section>
            </q-card-section>
            <q-separator />
            <q-card-actions>
              <q-btn flat round icon="event" color="secondary" />
              <q-btn flat>
                {{$trd(event.startDate)}}
              </q-btn>
              <q-btn flat>
                {{$trd(event.endDate)}}
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="row q-col-gutter-md relative-position full-height" v-else>
        <div class="col-12">
          <div class="absolute-center full-width">
            <not-result />
          </div>
        </div>
      </div>

    </div>
    <inner-loading :visible="visible"/>
    <eventModal
      v-if="openModal"
      :img="eventSelected.mainImage.path"
      :event="eventSelected"
      :opened="openModal"
      @closeModal="openModal = false"/>
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
    filters:{
      subStr: function(string) {
        return string.substring(0,100) + '...';
      }
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
