<template>


<div class="calendario-evento">
  
<q-tabs animated swipeable inverted color="red-14" align="left" >
        <q-tab default name="eventos" slot="title" label="Eventos" />
        <q-tab name="calendario" slot="title"  label="Calendario" />

        <q-tab-pane name="eventos">
          <eventos v-for="(e, index) in eventsCalendar"
            :hora="e.hora"
            :titulo="e.title"
            :imagen="e.imagen"
            :contenido="e.contenido"
            :lugar="e.lugar"
            :fecha="e.fecha"
           :col="e.color"

          ></eventos>


        </q-tab-pane>
        <q-tab-pane name="calendario">   
          <FullCalendar
          class='calendario'
          id='calendario'
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
          :events="eventsCalendar"
          :timeZone='UTC'
          :locale ="es-ES"

          :buttonText="{
            dayGridMonth:'Mes',
            timeGridWeek:'Semana',
            timeGridDay:'Dia',
            
          }"
         
          
        /></q-tab-pane>

</q-tabs>

</div>
</template>

<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
 import eventos from "src/components/partials/eventos";
export default {
  components: {
    FullCalendar,
    eventos
  },
   
  data: function() {
    return {
      calendarPlugins: [ 
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin 
      ],
      calendarWeekends: true,
      
      eventsCalendar: [ 
         {
          title: 'Event1',
          start: '2019-06-10 12:30:00',
          end: '2019-06-13 16:30:00',
          color: '#29DB90',
          hora: "",
          fecha:"",
           imagen: '../assets/image/maquila-interna.jpg',
          lugar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, sed!",
          contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, porro unde aspernatur quia tenetur provident, ipsum vero magni accusantium vitae.",
        },
        {
          title: 'Event3',
          start: '2019-06-08 17:30:00',
          end: '2019-06-08 21:30:00',
          color: '#EA0304',

          hora: "",
          fecha:"",
           imagen: '../assets/image/maquila-interna.jpg',
          lugar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ipsa.",
          contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quas, odit. Aut illo accusantium reprehenderit! Possimus perferendis ab, expedita similique!",
        }, 
        {
          title: 'Event2',
          start: '2019-06-07 17:30:00',
          end: '2019-06-07 21:30:00',
          color: '#17B0FF',
          hora: "",
          fecha:"",
           imagen: '../assets/image/maquila-interna.jpg',
          lugar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, officia?",
          contenido:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nostrum, deserunt magnam excepturi. Molestias unde ipsa laborum quibusdam, ducimus illum.",
        },  
      ]

    }
  },


 mounted() {
var i1=document.createElement("i");
i1.setAttribute('class', 'fa fa-user');
var bt1=document.getElementsByClassName('fc-dayGridMonth-button');

var options1 = { year: 'numeric', month: 'long', day: 'numeric'};
var options2 = { hour: "2-digit", minute: "2-digit"};
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    
   this.eventsCalendar.forEach(function(e) {
     console.log(e.title);
      var fecha="";   
      var f= new Date(e.start);
      var en =   new Date(e.end);
      var f1 = f.getDate();
      var f2 = en.getDate();
 
      
       
       e.hora=f.getHours()+":"+f.getMinutes();

if ( f1 <  f2 && f.getMonth==en.getMonth ){
  e.fecha = f.getDate() +"-"+ en.getDate() + " de " + meses[f.getMonth()] + ", " + f.getFullYear();

 
}
else if( f1 < f2 && f.getMonth!=en.getMonth){

 e.fecha=f.getDate() + " de " + meses[f.getMonth()] + ", " + f.getFullYear() +"-"+en.getDate() + " de " + meses[en.getMonth()] + ", " + en.getFullYear();

}else{
  e.fecha = f.getDate() + " de " + meses[f.getMonth()] + ", " + f.getFullYear();
}

  });

},
   
  methods: {
        handleDateClick(arg) {
           var options2 = { hour: "2-digit", minute: "2-digit"};
          var fecha = arg.date;
          console.log(fecha.toLocaleDateString("es-ES", options2));
         
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
// you must include each plugins' css
// paths prefixed with ~ signify node_modules
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