<template>
<q-page>
  <div class="container-fluid  directorio2" >
          <div class="row ">
                     <div class="col-12 col-sm-6 filtro">
                       
                    <!-- Counting selected options -->
                     
                        <q-select 
                        stack-label="Departamento"
                        placeholder="Filtro" error 
                        toggle
                          v-model="searchCargo"
                          :options="options"

                        />
                     </div>
                     <div class="col-12 col-sm-6  busqueda">
                       <q-search class='search ' placeholder="Busqueda" error v-model="searchNombre"/>

                     </div>
                     

                </div>
                
           
               <div class="row directorio2">
                  <widget-directorio v-for="(directorio, index) in filtereddirectorios"
                  :key="index"
                  :nombre="directorio.nombre"
                  :direccion="directorio.direccion"
                  :ext="directorio.ext"
                  :telefono="directorio.telefono"
                  :email="directorio.email"
                  :cargo="directorio.cargo"
                  :imagen="directorio.imagen"
              ></widget-directorio>
               </div>
           
</div>
</q-page>
</template>
<script>
  import widgetDirectorio from "src/components/widgets/widget-directorio2.vue";
  export default {
    components: {
      widgetDirectorio,
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
       
      })
    },
    data() {
      return {
        options:[
      {
        label: 'Lorem Ipsum',
        value: 'Lorem Ipsum'
      },
       {
        label: 'Lorem Ipsum',
        value: 'Lorem Ipsum'
      },
       {
        label: 'Lorem Ipsum',
        value: 'ppo'
      },
       {
        label: 'Cargo',
        value: 'cargo'
      },
     
    ],
        NUM_RESULTS_CUMPLE: 4, 
        pag_cumple: 1,
         searchNombre:'',
          searchCargo:'',
        directorios:[
            {
              cargo: 'ppo',
              imagen: '../assets/image/maquila-interna.jpg',
              nombre: 'Lorem ipsum.',
              email: 'email',
              telefono: 'telefono',
              ext: 'ext',
              direccion: 'direccion',
            },
             {
              cargo: 'Cargo',
              imagen: '../assets/image/maquila-interna.jpg',
              nombre: 'Jaun ipsum.',
              email: 'email',
              telefono: 'telefono',
              ext: 'ext',
              direccion: 'direccion',
            },
             {
              cargo: 'Cargo',
              imagen: '../assets/image/maquila-interna.jpg',
              nombre: 'jos ipsum.',
              email: 'email',
              telefono: 'telefono',
              ext: 'ext',
              direccion: 'direccion',
            },
            {
              cargo: 'Cargo',
              imagen: '../assets/image/maquila-interna.jpg',
              nombre: 'Lorem ipsum.',
              email: 'email',
              telefono: 'telefono',
              ext: 'ext',
              direccion: 'direccion',
            },
            {
              cargo: 'Cargo',
              imagen: '../assets/image/maquila-interna.jpg',
              nombre: 'Lorem ipsum.',
              email: 'email',
              telefono: 'telefono',
              ext: 'ext',
              direccion: 'direccion',
            },
        ],
      }
    },


    methods: {


    },
     computed: {
    filtereddirectorios (){
      if(this.searchNombre){
      return this.directorios.filter((item)=>{
        return item.nombre.startsWith(this.searchNombre);
      });
      }else{
        return this.directorios;
      }
    
      if (this.searchCargo){
      return this.directorios.filter((item)=>{
        return item.cargo.startsWith(this.searchCargo);
      });
      }else{
        return this.directorios;
      }
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    }
  }


   

}
</script>
<style lang="stylus">
color-rojo= #EA0304
color-oscuro= #666666
color-gris= #959595

.directorio2 
  .busqueda 
    padding:15px  
    display: flex
    align-items: center
    justify-content: flex-end
    .search 
      padding: 7px 20px
      max-width:244px 
      background: rgba(#fff, .6)
      border-radius:5px 
      width:100%
      &:before
        border-bottom:none;
      
      i
        order:2
        color: color-rojo
        font-size: 20px
        font-weight: bold
      input
        font-size:11px
        font-style: italic
      
  .filtro
     padding:15px
    


</style>
