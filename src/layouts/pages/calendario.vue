<template>
  <div class='demo-app'>

    <FullCalendar
      class='demo-app-calendar'
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :header="{
        left: 'dayGridMonth,timeGridWeek,timeGridDay',
        center: 'prev,title,next',
        right: ''
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      :timeZone='UTC'
      :locale ="es"
      :buttonText="{
        dayGridMonth:'Mes',
        timeGridWeek:'Semana',
        timeGridDay:'Dia',
        
      }"
      />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
   props: ['calendarEvents'],
  data: function() {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
    }
    }
  }
</script>

<style lang='stylus'>
// you must include each plugins' css
// paths prefixed with ~ signify node_modules
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
    .fc-toolbar
        display:block !important;
    .fc-left
        width:100%
        display:block
        .fc-button-primary
            &:not(:disabled):active, 
            &:not(:disabled).fc-button-active     
              color: #fff
              border: none
            &:hover
              color: #fff
    .fc-center div
        width:100%
        display:flex;
        justify-content:space-between
</style>