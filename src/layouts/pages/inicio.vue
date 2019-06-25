<template>
<q-page>
  <div class="container-fluid  panel-control" >

    <div class="row d-flex align-items-stretch">
      <div class="col-md-4 col-12 widget ">
        <div class="contenedor noticia">
          <div class="titulo color-rojo separador">
            <i class="fa fa-newspaper"></i>
            <h2 >Noticias</h2>
          </div>
            <div v-if="noticias.length >= 10">  
              <widget-noticias  v-for="(noticia, index) in 10"
              :key="index"
              :titulo="noticias[index].titulo"
              :imagen="noticias[index].imagen"
              :fecha="noticias[index].fecha"
              :href="noticias[index].hreff"
              ></widget-noticias>
            </div>  
            <div v-else>  
              <widget-noticias  v-for="(noticia, index) in noticias"
              :key="index"
              :titulo="noticia.titulo"
              :imagen="noticia.imagen"
              :fecha="noticia.fecha"
              :href="noticia.hreff"
              ></widget-noticias> 
            </div>    
        </div> 
      </div>  
      <div class="col-md-8 col-12 ">
      <div class="row">
        <div class="col-md-6 col-12 widget evento">
            <div class="titulo">
              <i class="fa fa-calendar-alt"></i>
              <h2>Calendario de Eventos</h2>
            </div>
            <div class="contenedor">
              <widget-calendario v-for="(calendario, index) in calendarios"
                :key="index"
                :titulo="calendario.titulo"
                :span="calendario.span"
                :href="calendario.hreff"
                :fecha="calendario.fecha"></widget-calendario>
            </div>
        </div>  
        <div class="col-md-6 col-12 widget cumple">
          <div class="titulo">
            <i class="fas fa-birthday-cake"></i>
            <h2>Cumpleaños</h2>  
          </div>
          <div class="contenedor ">
            <div class="separador header ">
              <h2 class="color-rojo">Mayo</h2>
              <nav aria-label="Pag_cumplee navigation" class="text-center">
                <ul class="pagination text-center">
                    <li>
                      <div v-if="pag_cumple==1" >
                        <a href="#" disabled aria-label="Previous" v-show="pag_cumple">
                            <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                        </a>
                      </div>
                      <div v-else >
                        <a href="#" aria-label="Previous" v-show="pag_cumple " @click.prevent="pag_cumple -= 1">
                            <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                        </a>
                      </div>
                    </li>

                    <li>
                        <div v-if="(pag_cumple*NUM_RESULTS_CUMPLE / cumples.length >= 1)">
                          <a href="#" aria-label="Next" v-show="pag_cumple " disabled>
                            <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                        </a>
                        </div>
                        <div v-else>
                          <a href="#" aria-label="Next" v-show="pag_cumple " @click.prevent="pag_cumple += 1">
                            <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                        </a>

                        </div>
                    </li>
                </ul>
              </nav>
            </div>
            <widget-cumple   v-show="(pag_cumple - 1) * NUM_RESULTS_CUMPLE <= index  && pag_cumple * NUM_RESULTS_CUMPLE > index" v-for="(cumple, index) in cumples"
                  :key="index"
                  :nombre="cumple.nombre"
                  :fecha="cumple.fecha"
                  :href="cumple.hreff"
                  :imagen="cumple.imagen"></widget-cumple>
          </div>
        </div>
      </div>
      <div class="row widget directorio">
          <div class=" col-12">
            <div class="contenedor">  
                <div class="titulo">
                    <i class="fas color-rojo fa-address-card"></i>
                    <h2>Directorio Corporativo</h2>
                </div>
               <div class="row">
                  <widget-directorio v-for="(directorio, index) in directorios"
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
  import widgetCalendario from "src/components/widgets/widget-calendario.vue";
  import widgetDirectorio from "src/components/widgets/widget-directorio.vue";
  import widgetCumple from "src/components/widgets/widget-cumple.vue";
  import widgetNoticias from "src/components/widgets/widget-noticias.vue";
  export default {
    props: {},
    components: {
      widgetCalendario,
      widgetNoticias,
      widgetCumple,
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


        noticias: [
          {
            titulo:'Lorem ipsum dolor sit amet,',
            imagen: '../assets/image/maquila-interna.jpg',
            fecha:'11 mayo,2019',
            hreff:'#',

          },
                    {
            titulo:'Lorem ipsum dolor sit amet,',
            imagen: '../assets/image/maquila-interna.jpg',
            fecha:'11 mayo,2019',
            hreff:'#',

          },
                    {
            titulo:'Lorem ipsum dolor sit amet,',
            imagen: '../assets/image/maquila-interna.jpg',
            fecha:'11 mayo,2019',
            hreff:'#',

          },
                    {
            titulo:'Lorem ipsum dolor sit amet,',
            imagen: '../assets/image/maquila-interna.jpg',
            fecha:'11 mayo,2019',
            hreff:'#',

          },
          {
            titulo:'Lorem ipsum dolor sit amet,',
            imagen: '../assets/image/maquila-interna.jpg',
            fecha:'11 mayo,2019',
            hreff:'#',

          },
          {
            titulo:'Lorem ipsum dolor sit amet,',
            imagen: '../assets/image/maquila-interna.jpg',
            fecha:'11 mayo,2019',
            hreff:'#',

          },
        ],
        calendarios:[
          {
            fecha:'30 de abril, 2019',
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            span: 'text-teal-13',
            hreff: '#',
          },
           {
            fecha:'30 de abril, 2019',
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            span: 'text-blue',
            hreff: '#',
          },
           {
            fecha:'30 de abril, 2019',
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            span: 'text-red-14',
            hreff: '#',
          },
        ],
        cumples:[
         {
           fecha:'11 de Mayo',
            imagen: '../assets/image/maquila-interna.jpg',
            nombre: 'Lorem ipsum',
            hreff: '#',
          },
           {
           fecha:'11 de Mayo',
            imagen: '../assets/image/maquila-interna.jpg',
            nombre: 'Lorem ipsum',
            hreff: '#',
          },
          {
            fecha:'11 de Mayo',
            imagen: '../assets/image/maquila-interna.jpg',
            nombre: 'Lorem ipsum',
            hreff: '#',
          },
          {
            fecha:'11 de Mayo',
            imagen: '../assets/image/maquila-interna.jpg',
            nombre: 'Lorem ipsum',
            hreff: '#',
          },
          {
            fecha:'11 de Mayo',
            imagen: '../assets/image/maquila-interna.jpg',
            nombre: 'Lorem ipsum',
            hreff: '#',
          },
        ],
        directorios:[
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


    }

  }
</script>
<style lang="stylus">

color-rojo= #EA0304
color-oscuro= #666666
color-gris= #959595

.panel-control
    padding: 15px !important
    
h2
  font-size: 14px
  display: inline-block
p
  font-size: 11px
  margin-bottom: 0px
  color: color-oscuro
a
  color: #000
  font-size: 10px
  text-decoration: none
  line-height: 15px
  &:hover
    color: color-rojo
span
    font-size: 10px
    color: color-gris
    display: inline-block 
.bg-primary
  background: color-rojo !important  
.cumple .header
  display: flex
  align-items: center
  justify-content: space-between
  i
    margin: 0px 
  
.color-rojo
  color: color-rojo


.titulo 
  padding: 15px 0px 
  i
    color: color-rojo
    margin-right: 8px
  h2
    color: color-oscuro
    font-weight: bold
    margin:0px
    


.color-gris
  color: color-gris

.color-oscuro
  color: color-oscuro


 
.contenido p
  font-size: 11px
  margin-bottom: 3px

.pagination
  display: flex
  list-style: none
  margin: 0px
  a span
    color: color-rojo
    padding: 0px 5px
 
vendor(prop, args)
    -webkit-{prop} args
    -moz-{prop} args
    {prop} args
    
.widget 
  padding: 15px
  margin-bottom: 30px
  .contenedor
    padding: 20px 15px
    background: #fff
    min-height: 100%
    -webkit-box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31)
    -moz-box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31)
    box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31)


.cumple .contenedor 
  padding-top:0px
  .header
    padding:10px 10px
    margin-bottom: 10px
    h2
      font-weight: bold
      margin: 0px
    i
      font-weight:bold
      font-size:14px
  .cumple-item
    .contenido 
      display:flex
      align-items:center
      margin: 10px 0px
      padding: 0px 10px 
      .imagen img
        width: 35px
        height: 35px
        border-radius: 50%
        margin-right: 15px
      .content 
        span
          width: 100%
          display: block
        p
          font-size: 14px  
.evento .contenedor 
 
  .evento-item
    .contenido 
      display: flex
      padding: 15px 0px
      align-items: start
      i
        font-size: 10px
        display: flex
        align-items: start
        margin-right:   15px
      .content 
        span
          width: 100%
          display: block 
.directorio
  margin-top: 15px          

</style>
