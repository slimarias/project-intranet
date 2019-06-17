<template>
   <q-modal v-model="basicModal" :content-css="{maxWidth: '340px'}">
      <div class="row">
          <div class="circulo-icon" >
            <q-btn icon="close" flat rounded @click="basicModal = false" class="float-right btn-close"/>
          </div>          
        </div>
      <div class="row modal-wid">
        <div class="col-12 col-md-6">
          <img :src="imagen" :alt="nombre" width="100%">
        </div>
        <div class="col-12 col-md-auto contenido">
          <h2 class="separador">{{nombre}}</h2>  
          <span>{{cargo}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 datos">
         <div  class="circulo-icon"><i class="fas fa-phone "></i></div>
          <div>
            <p><strong>Télefono:</strong>{{telefono}}</p>
            <p><strong>Ext.</strong>{{ext}}</p>
          </div>
        </div>
        <div class="col-12 datos">
           <div><i class="fas fa-envelope"></i></div>
            <div>
              <p><strong>Email:</strong></p>
              <p>{{email}}</p>
            </div>
        </div>
        <div class="col-12 datos">
           <div><i class="fas fa-map-marker-alt"></i></div>
          <div>
            <p><strong>Dirección:</strong></p>
            <p>{{direccion}}</p>
          </div>
        </div>
      </div>
    </div>
  </q-modal>
</template>
<script>
  /*Components*/

  export default {
    props: ['nombre','cargo','telefono','ext','email','direccion','imagen', 'basicModal'],
    data() {
      return {
         basicModal: false,
      }
    },
     methods: {
    setBasicModal: function(value) {
        this.basicModal = value;
    }
  },
  created: function() {
    this.$parent.$on('update', this.setBasicModal);
  }


  }
</script>
<style lang="stylus">
  
</style>
