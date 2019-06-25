<template>
  <div class="evento-item">
          
            <div class=" contenido">
              <div :class='span'>
                  <i class="fas fa-circle"></i> 
              </div>
              <a :href='href' class="content">
                <span class="color-gris"><strong>{{fecha}}</strong></span>
                <p >{{titulo}}</p>                
              </a>
            </div>
    </div>
    
</template>

<script>
export default {
  props: ['titulo','span','fecha', 'href'],
   
}
    
</script>

<style lang='stylus'>
 
          
</style>