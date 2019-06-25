
<template>


<div class="col-12 col-md-4 col-lg-3 text-center directorio-item">

       
            <div class="imagen">
            <img :src="imagen" :alt="nombre" width="100%">            </div>
            <div class="contenido">
              <p >{{nombre}}</p>
              <span class="separador">{{cargo}}</span>
            <q-item
              link
              v-for="modal in types"
              :key="mod"
              @click.native="show"
              v-ripple.mat

            >
              Ver Perfil
            </q-item>
            </div>
       

  
    <modal-directorio
       :basicModal="basicModal"
       :nombre="nombre"
       :direccion="direccion"
       :ext="ext"
       :telefono="telefono"
       :email="email"
       :cargo="cargo"
       :imagen="imagen"
    ></modal-directorio>
  </div>
</template>

<script>
 import modalDirectorio from "src/components/modals/modal.vue";
 

export default {
   props: ['nombre','imagen','cargo', 'direccion','email','telefono','ext'],
  components: {
     modalDirectorio,
    
  },
  data () {
    return {
      basicModal: false,
      types: [
        {          
          show: () => { this.basicModal = true}
        },
        
      ],
    }
  },
  methods: {
     show: function() {
        this.$emit('update', true);
    }

  },
}
</script>
<style lang='stylus'>

.directorio
  margin-top:15px
  .contenedor
    padding-top: 0px
    .titulo
      margin-bottom: 20px;
    .directorio-item
      .q-item
        justify-content: center;
        display: flex 
        color: #EA0304
        font-size: 10px
        &:hover
          background: #fff !important
      .contenido
        padding: 0px 20px 30px 20px
        span
          color: #959595
          font-size: 10px
          margin-bottom: 0px
          display: block
          padding-bottom: 5px
        p
          display: block
      .imagen img
        width: 72px
        height: 72px
        border-radius: 50%
        margin-bottom: 5px



.modal-content 
  padding: 30px 20px
  min-height:423px
  media (max-width: 767px) 
    .modal-content
      max-width: auto !important;
      max-height: auto !important;

  img
    min-height: 140px
    min-width: 140px
    object-fit:cover
    border-radius: 50%
  .contenido
    padding-left: 20px
    h2
      display: block
      width: 100%
      margin: 0px
      font-weight: bold
      color: #666
    span
      color: #EA0304
      font-size: 12px
  .modal-wid
    display: flex
    align-items: center 
    padding-bottom:   20px
    
     
  .btn-close
     position: absolute
     right: 0 
     top: 0 
     .q-btn-inner
       padding:3px
       border-radius: 50%
       background: #EA0304 
       .q-icon, .material-icons 
         color: #fff
         font-size:10px
       
       
  .datos
    display: flex
    padding: 10px 50px
    i
      color: #EA0304
      font-size: 15px
      margin-right:   30px
    .circulo-icon
      background: #EA0304
      color: #fff
      height: 16px
      width: 16px
      display: flex
      align-items: center
      justify-content: center
      padding: 0px
      border-radius: 50%
      font-size: 10px
      margin-right: 20px
      i
        font-size: 10px
        color: #fff
        padding: 0px
        margin:0px
    strong
      color: #666666
      font-size: 12px
      font-weight: bold

</style>
