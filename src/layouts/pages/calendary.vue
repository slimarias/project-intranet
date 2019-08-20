<template>
  <div class="q-layout-page relative-position">
    <q-tabs animated swipeable inverted color="primary" align="left" >
      <q-tab default name="events" slot="title" label="Eventos" />
      <q-tab name="calendary" slot="title"  label="Calendario" />
      <q-tab-pane name="events">
        <q-list no-border	highlight>
          <q-item
            v-for="(event, index) in table.data"
           :key="index">
            <q-item-side>
              <q-item-tile>
                <div
                  @click="openModal = true; eventSelected = event"
                  :style="`background-image: url(${event.mainImage.path}); cursor: pointer`"
                  class="product-img">
                </div>
              </q-item-tile>
            </q-item-side>
            <q-item-main >
              <q-item-tile label>
                <div class="row">
                  <div class="col-md-12 q-px-xl">
                    <p>
                      <b>{{event.title}}</b>
                    </p>
                    <p align="justify">
                      {{event.summary}}
                    </p>
                  </div>
                  <div class="col-md-6 q-px-xl">
                    <div class="row">
                      <div class="col-md-4">
                        <b>Dirección</b>
                      </div>
                      <div class="col-md-8">
                        <p>
                          {{event.address}}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 q-px-xl">
                    <div class="row">
                      <div class="col-md-4">
                        <b>Fecha: </b>
                      </div>
                      <div class="col-md-8">
                        <p>
                          {{$trd(event.startDate)}} - {{$trd(event.endDate)}}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
        <q-item-separator />
        <div
          class="flex flex-center"
          v-if="table.pagination.lastPage > 1">
          <q-pagination
            direction-links
            class="col-md-12 text-center"
            v-model="table.pagination.page"
            :max="table.pagination.lastPage"
            @input="getDataTable"/>
        </div>
      </q-tab-pane>
      <q-tab-pane name="calendary">
        <gridCalendar :dataCalendar="table.data"/>
      </q-tab-pane>
    </q-tabs>
    <inner-loading
      :visible="loading"/>
    <eventModal
      :img="eventSelected.mainImage.path"
      :event="eventSelected"
      :opened="openModal"
      @closeModal="openModal = false"/>
  </div>
</template>

<script>
  import eventShow from 'src/components/qevent/event'
  import gridCalendar from 'src/components/qevent/gridCalendar'
  import eventModal from 'src/components/qevent/eventModal'
  
  export default {
    components: {
      eventShow,
      gridCalendar,
      eventModal
    },
    data() {
      return {
        openModal: false,
        eventSelected: {
          mainImage:{
            path:''
          }
        },
        loading: false,
        table: {
          data: [],
          pagination: {
            page: 1,
            rowsNumber: '',
            rowsPerPage: 5,
            lastPage:0,
          },
          filter: {
            search: null
          },
          filters:{
          },
          options:{
          }
        },
        users:{
          data:[],
          pagination:{
            page:1,
            rowsPerPage:10,
          }
        },
      }
    },
    created() {
      this.$nextTick(function () {
        this.getDataTable( true )
      })
    },
    methods: {
      getDataTable(refresh = false) {
        this.getData({pagination: this.table.pagination}, refresh)
      },
      getData({pagination, filter}, refresh = false) {
        this.loading = true
        let params = {
          refresh: refresh,
          params: {
            page: pagination.page,
            take: pagination.rowsPerPage,
            filter: {
              orderByNow: true
            }
          },
        }
        this.$crud.index('apiRoutes.qevent.events', params)
        .then( response => {
          this.table.data = response.data
          this.table.pagination.page = response.meta.page.currentPage
          this.table.pagination.rowsNumber = response.meta.page.total
          this.table.pagination.rowsPerPage = pagination.rowsPerPage
          this.table.pagination.lastPage = response.meta.page.lastPage
          this.loading = false
        })
        .catch( error => {
          this.$alert.error({message : this.$tr('ui.message.errorRequest'), timeOut : 4000})
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~variables";
  .product-img
    background-position center;
    background-repeat no-repeat;
    background-size cover;
    width 200px
    height 200px
    border-bottom 3px solid $primary
    border-radius 5px
    transition: all .5s ease
    
    &:hover
      transform: scale(1.01)
</style>
