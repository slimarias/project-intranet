<template>

<div class=" noticias">
    
         <div class="container-fliud">
           <div class="row item-noticia">
              <div class="col-4 imagen  w-100">
                <img :src="imagen" width="100%" :alt="titulo">
              </div>
              <div class="col-6 contenido">
                <a :href='href'><p>{{titulo}}</p>
                <span>{{fecha}}</span></a>
              </div>
           </div>

         </div>
          
  </div>
</template>
<script>

  export default {
    props: ['titulo','imagen','fecha', 'href'],
    components: {

    },
    watch: {},
    mounted() {
     
    },
    data() {
      return {
      }
    },
    methods: {}

  }
</script>
<style lang="stylus">
.widget        
  .noticia
    .titulo 
      padding-top: 0px
      margin-bottom: 10px
      padding-bottom: 15px
    .item-noticia
      display: flex
      align-items:center
      min-height: 90px
      padding: 15px 0px
      .contenido
          padding-left: 10px;
      .imagen
        height:60px
        width:70px
        img
          object-fit:cover;
          height:100%   
</style>
