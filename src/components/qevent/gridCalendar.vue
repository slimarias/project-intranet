<template>
  <div class='calendario-evento'>
    <FullCalendar
      ref="fullCalendar"
      height= '300'
      defaultView="dayGridMonth"
      :header="{
        left: 'dayGridMonth,timeGridWeek,timeGridDay',
        center: 'prev,title,next',
        right: ''
      }"
      @dateClick="handleDateClick"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="[]"
      timeZone='UTC'
      locale ="es-ES"
      :buttonText="{
        dayGridMonth:'Mes',
        timeGridWeek:'Semana',
        timeGridDay:'Dia',
      }"/>
  </div>
</template>

<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  export default {
    components: {
      FullCalendar,
    },
    props: {
      dataCalendar: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        calendarPlugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin
        ],
        calendarWeekends: true,
      }
    },
    methods: {
      handleDateClick(arg) {
      
      }
    }
  }
</script>

<style lang='stylus'>

color-rojo= #EA0304
color-oscuro= #666666
color-gris= #959595
color-border= #d8d8d8
color-bg= rgba(255,255,255,0.522)
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
.calendario-evento
  .fc-day-grid-event .fc-content span
    font-size: 10px
    color: #fff
  
  .fc-dayGridMonth-button:before,.fc-timeGridWeek-button:before,.fc-timeGridDay-button:before
    font-size: 25px
    color: color-rojo
    width: 25px
    height: 25px
    font-weight: 900
    font-family: FontAwesome
    display: block
    text-align:center
    margin: auto
    margin-bottom:15px
    position: relative
    
  .fc-dayGridMonth-button:before
    content: '\f00a'
  .fc-timeGridWeek-button:before
    content: '\f0db'
  .fc-timeGridDay-button:before
    content: '\f039'

  .fc-unthemed td.fc-today
    background: color-bg

  .calendario
    border: 1px solid color-border
  .fc-toolbar
      display:block !important;
      margin-bottom: 0px
  .fc-left
      padding:20px 35px 0px 35px
      width:100%
      font-size:11px
      display:block
      border-bottom: 1px solid color-border
      
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
      font-size: 15px
      padding-top: 20px
      padding-bottom: 10px
      color: color-rojo
      justify-content:space-between
      button span,h2
        font-weight: bold
        color: color-rojo
  .fc-widget-header table thead tr th
    border: none
    span
      font-size: 12px
      text-transform: capitalize
  .fc-day-number
    font-size: 12px
    color: color-oscuro

  .q-tabs-inverted .q-tabs-head
    background: transparent
  .q-tab-label
    color:color-gris
    font-size:14px
  .fc-button-group .fc-button
    margin: 0px 10px
    padding:5px
    
  .fc-button
    background: transparent
    color: color-oscuro
    border: none
    border-radius:0px
    border-bottom: 2px solid transparent !important
    &:hover
      color: color-rojo !important;
      
  .fc-button-primary:not(:disabled):active, .fc-button-primary:not(:disabled).fc-button-active
    color: color-oscuro !important;
    background-color: transparent;
    border-color: transparent;
    border-bottom: 2px solid color-rojo !important
    &:focus
      box-shadow: none
  
</style>
