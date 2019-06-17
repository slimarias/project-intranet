<template>
<q-page>
  <div class="container-fluid " >
    <div class="row">
      <div class="col-md-4 col-12 p">
        <div class="widget ">
          <div class="titulo color-rojo separador">
            <i class="fa fa-newspaper"></i>
            <h2 >Noticias</h2>
          </div>
        <widget-noticias v-for="(noticia, index) in noticias"
        :key="index"
        :titulo="noticia.titulo"
        :imagen="noticia.imagen"
        :fecha="noticia.fecha"
        :href="noticia.hreff"
        ></widget-noticias>
      </div> 
    </div>       
    <div class="col-md-8 col-12 p">
        <div class="row">
          <div class="col-md-6 col-12 p">
            <div class="col-12 titulo">
              <i class="fa fa-calendar-alt"></i>
              <h2>Calendario de Eventos</h2>
            </div>
            <widget-calendario v-for="(calendario, index) in calendarios"
        :key="index"
        :titulo="calendario.titulo"
        :span="calendario.span"
        :href="calendario.hreff"
        :fecha="calendario.fecha"></widget-calendario>
            </div>  
        <div class="col-md-6 col-12 p">
          <div class="titulo">
            <i class="fas fa-birthday-cake"></i>
            <h2>Cumpleaños</h2>  
           </div>
          <div class="container-fliud widget">
          <div class="row  separador cumple">
            <div class="col-12 header ">
              <p class="color-rojo"><strong>Mayo</strong></p>

                  <q-pagination
                    v-model="page2"
                    color="red-14"
                    :min="1"
                    :max="0"
                    :max-pages="6"
                    text-color="white"
                    direction-links
                  />
            </div>
          </div>
    
          <widget-cumple v-for="(cumple, index) in cumples"
                :key="index"
                :titulo="cumple.titulo"
                :cargo="cumple.cargo"
                :href="cumple.hreff"
                :imagen="cumple.imagen"></widget-cumple>
            </div>
          </div>
        </div>
      
        <div class="row">
          <div class="widget directorio col-12">
            <div class="titulo">
              <i class="fas color-rojo fa-address-card"></i>
                <h2>Directorio Corporativo</h2>
            </div>
             <div class="row ">
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
            cargo:'Cargp=o',
            imagen: '../assets/image/maquila-interna.jpg',
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            span: 'text-teal-13',
            hreff: '#',
          },
          {
            cargo:'Cargp=o',
            imagen: '../assets/image/maquila-interna.jpg',
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            span: 'text-teal-13',
            hreff: '#',
          },
          {
            cargo:'Cargp=o',
            imagen: '../assets/image/maquila-interna.jpg',
            titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            span: 'text-teal-13',
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
        ],
      }
    },
    methods: {


    }

  }
</script>
<style>
.cumple .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cumple  .header i{
    margin:0px;
  }

  .p{
    padding:10px;
  }
  h2{
    font-size: 14px;
    display: inline-block;
  }
  p{
    font-size: 11px;
    margin-bottom: 0px;
    color: #666666;
  }
  
  .color-rojo, .titulo i{
    color: #EA0304;
  }

  .color-gris{
    color: #959595;
  }
  .color-oscuro{
    color: #666666;
  }

  i{
    margin-right: 20px;
  }
  
  a{
    color: #000;
    font-size: 10px;
    text-decoration: none;
    line-height: 15px;  }

  a:hover{
    color: #EA0304;
    font-weight: bold;

  }
  .titulo h2{
    color: #666;
    font-weight: bold;
  }

  .contenido p{
    font-size: 11px;
    margin-bottom: 3px;
  }

  span{
    font-size: 10px;
    color: #959595;
    display: inline-block;
  }
  
  q-page{
    background: #F1F1F1;
  }
  .widget{
    background: #fff;
    padding:0px 20px;
    -webkit-box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31);
-moz-box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31);
box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31);

  }

</style>
