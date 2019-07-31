<template>
  <div class="q-layout-page">
    <q-tabs animated swipeable inverted color="primary" align="left" >
      <q-tab default name="events" slot="title" label="Eventos" />
      <q-tab name="calendary" slot="title"  label="Calendario" />
      <q-tab-pane name="events">
        <eventShow
          :event="event"
          v-for="(event, index) in table.data"
          :key="index" />
      </q-tab-pane>
      <q-tab-pane name="calendary">
        <gridCalendar :dataCalendar="table.data"/>
      </q-tab-pane>
    </q-tabs>
  </div>
</template>

<script>
  import eventShow from 'src/components/qevent/event'
  import gridCalendar from 'src/components/qevent/gridCalendar'
  export default {
    components: {
      eventShow,
      gridCalendar
    },
    data() {
      return {
        loading: false,
        table: {
          data: [],
          pagination: {
            page: 1,
            rowsNumber: '',
            rowsPerPage: 10,
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
      }
    },
    created() {
      this.$nextTick(function () {

      })
    },
    methods: {
    
    }
  }
</script>

<style scoped>

</style>
