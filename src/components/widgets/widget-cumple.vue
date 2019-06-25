<template>
	<div class="cumple-item">
          <div class="row">
            <div class="col-12  contenido">
              <div class="imagen ">
                <img :src="imagen" :alt="nombre" width="100%">   
              </div>
              <div class="content">
                <p >{{nombre}}</p>
                <span class="color-rojo"><strong>{{fecha}}</strong></span>
              </div>
            </div>
          </div>
     </div> 
</template>
<script>

  export default {
     props: ['nombre','imagen','fecha', 'href'],
    components: {

    },
    
    

  }
</script>
<style lang="stylus">

  
  
</style>
