
<template>
<div class="event">
<div class="row ">
   <i class="col-auto  fas fa-circle"v-bind:style="{ color: col }"></i>           
              
  <h3 class="col-10 "><span>{{fecha}}</span></h3>
</div>
<div class="row evento-ite">
  <div class="col-12 col-sm-auto text-center">
      <img :src="imagen" class="img-fluid " :alt="nombre" width="100%">            
  </div>

<div class="col-sm-10 col-12 contenido">
  <div class="row">
  <div class="col-12">
    <h3>{{titulo}}</h3>
    <p>{{contenido}}</p>
  </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-8 ">
      <div class="row">
        <div class="col-auto"><p><span>Lugar:</span></p></div>
      <div class="col-10"><p class="col-6">{{lugar}}</p></div>
      </div>
    </div>
      <div class="col-12 col-sm-4">
      <p><span>Hora:</span></p><p> {{hora}}</p>
    </div>
  </div>
</div>

</div>

</div>
</template>

<script>
export default {
   props: ['fecha','titulo','imagen','contenido', 'lugar','hora','col'],
 }

</script>
<style lang='stylus'>

color-rojo= #EA0304
color-oscuro= #333
color-gris= #959595
color-border= #d8d8d8
color-bg= #f8f8f8
.event
  margin-top: 20px
  
  i
    margin-left:  30px
    font-size: 10px
    display:flex
    align-items:center
    margin-bottom: 10px
  .evento-ite
    background: #f1f1f1
    padding:  20px 30px
    border-bottom: 2px solid color-border
    .contenido
      padding-left:20px
      max-width: 600px;
      p
        display: inline-block;
         
         
  h3
    margin:   0px
    color: color-oscuro
    font-size: 20px
    font-weight: bold
    line-height: 15px
    margin-bottom:  10px
    span
      color: color-rojo
      font-size: 15px
      margin-left: 20px
      font-weight: bold
  p
    font-size:10px
    text-align: justify
    padding-right: 10px
    padding-top: 10px
    span
      font-size:12px
      font-weight:bold
      padding-bottom: 20px
      color: color-oscuro !important
      
  img
    padding-bottom: 10px
    width:100%
    max-width:160px

.q-tab-pane 
  padding: 0px !important


</style>
