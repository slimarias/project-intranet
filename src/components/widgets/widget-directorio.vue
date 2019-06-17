
<template>
<div>

<div class="col-12 col-md-4 col-lg-3 text-center">
       
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
<style>
.modal-wid{
  padding: 20px;
  display: flex;
  align-items: center;
}
.directorio .contenido{
  padding: 0px 20px 30px 20px;
}
.directorio .imagen img{
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-bottom: 5px;

}
.directorio .contenido .q-item{
  color: #EA0304;
  font-size: 10px;
}
.directorio .contenido .q-item:hover{
 background: #fff;
  font-weight: bold;
}

.directorio .contenido span{
  color: #959595;
  font-size: 10px;
  margin-bottom: 0px;
  display: block;
  padding-bottom: 5px;
}
.directorio .contenido p{
  display: block;
}
.modal-content img{
  height: 140px;
  width: 140px;
  border-radius: 50%;
}
.modal-content .contenido{
  padding-left: 20px;
}
.modal-content .contenido h2{
  display: block;
  width: 100%;
  margin: 0px;
}
.modal-content .contenido span{
  color: #EA0304;
  font-size: 12px;
  font-weight: bold;
}
.modal-content .datos{
  display: flex;
  padding: 10px 50px;
}

.modal-content .datos i{
  color: #EA0304;
  font-size: 15px;
}
.modal-content .datos .circulo-icon{
  background: #EA0304;
  color: #fff;
  height: 16px;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 50%;
  font-size: 10px;
  margin-right:  20px;
}
.modal-content .datos .circulo-icon i{
  font-size: 10px;
  color: #fff;
  padding: 0px;
  margin:0px;

}

.modal-content strong{
  color: #666666;
  font-size: 12px;
  font-weight: bold;
}
</style>
