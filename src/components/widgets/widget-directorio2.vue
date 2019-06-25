
<template>


<div class="col-12 col-md-6 text-center directorio-item2 widget">
        <div class="contenedor">  
       <div class="row ">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="imagen">
            <img :src="imagen" :alt="nombre" width="100%"></div>
        </div>
        <div class="col-12 col-md-6 col-lg-8 contenido datos-directorio">
            <h2 class="separador titulo"><strong>  {{nombre}}</strong></h2>  
            <p ><strong>Cargo: </strong>{{cargo}}</p>
            <div class="circulo"> 
                <div  class="circulo-icon"><i class="fas fa-phone "></i></div>
             <div> <p><strong>Télefono: </strong>{{telefono}}</p>
 <p><strong>Ext. </strong>{{ext}}</p></div>
            </div>
            <div>
             
             
            </div>
        </div>
    </div>
    <div class="row"> 
      <div class="col"> 
          <q-item
                link
                v-for="modal in types"
                :key="mod"
                @click.native="show"
                v-ripple.mat

              >
               + Ver Perfil
              </q-item>
      </div>
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

      </div>
   
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

.directorio2
  margin-top:15px
  .directorio-item2      
    margin-bottom: 20px;
    .datos-directorio   
      text-align: justify
      span
        color: #959595
        font-size: 10px
        margin-bottom: 0px
        display: block
        padding-bottom: 5px
      p
        display: block   
        i
          color: #EA0304
          font-size: 15px
      h2
      .titulo
        padding-bottom:   15px
        color: #666
        widdth: 100%
        display:block
      .circulo  
        display: flex
        padding-top:  15px
        .circulo-icon
          margin-right:   0px
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
          margin-right: 10px
          i
            font-size: 10px
            color: #fff
            padding: 0px
            margin:0px
      strong
        color: #666666
        font-size: 12px
        font-weight: bold

    .q-item-link
            color: #EA0304
            float:right
            &:hover
              background: none !important
              color: #000
      .imagen 
        margin-top:   15px
        img
          width: 100px
          height: 100px
          border-radius: 50%
          margin-bottom: 5px


       



</style>
