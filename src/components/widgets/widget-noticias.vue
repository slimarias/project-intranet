<template>

<div class=" noticias">
    
         <div class="container-fliud">
           <div class="row noticia">
              <div class="col-12 col-md-4 imagen  w-100">
                <img :src="imagen" width="100%" :alt="titulo">
              </div>
              <div class="col-12 col-md-6 contenido">
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
<style>
.color-rojo{
  color: #EA0304;
}
.noticias{
}
.noticias .titulo{
  padding: 10px 0px;
  margin-bottom: 5px
}
.noticia{
  display: flex;
  align-items: center;

}
.noticia .contenido{
  padding: 10px;
}
.noticia .imagen img{
  max-height: 250px;
}

</style>
