<template>
<q-page>
  <div class="container-fluid  panel-control" >
      <div class="row ">
          <div class=" col-12">
            <div class="">  
                <div class="titulo">
  <div class="row">
                    <div class="search-wrapper panel-heading col-sm-12">
                        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                    </div>                        
                </div>
                
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
          </div>
        </div>
     </div>
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
        NUM_RESULTS_CUMPLE: 4, 
        pag_cumple: 1,
         searchQuery:'',
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
      if(this.searchQuery){
      return this.directorios.filter((item)=>{
        return item.nombre.startsWith(this.searchQuery);
      })
      }else{
        return this.directorios;
      }
    }
  }


   

}
</script>
<style lang="stylus">

</style>
