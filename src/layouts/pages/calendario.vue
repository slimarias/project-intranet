<template>
<div>
  <div class="titulo">
    <i class="fas fa-birthday-cake"></i>
   	<h2>Cumpleaños</h2>  
   </div>
	
	<div class="calendario widget">
    	<div class="container-fliud">
       
<calendar-month
  :start-date="Date('2019-01-01')"
  :event-array="someEventObject"
  :sunday-first-day-of-week="true"
  calendar-locale="fr"
  calendar-timezone="Europe/Paris"
  :allow-editing="false"
  :render-html="true"
/>
     </div>
          
  </div>


</div>


</template>
<script>
import  calendar from 'quasar-calendar'
  export default {
    props: {},
    components: {
      CALENDAR
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
       
      })
    },
    data() {
      return {
      }
    },
    methods: {}

  }
</script>
<style>
  .titulo h2{
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
    padding-left: 20px
  }
  q-page{
    background: #F1F1F1;
  }
</style>
