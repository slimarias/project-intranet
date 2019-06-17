<template>
<div>
  <div class="titulo">
    <i class="fas fa-birthday-cake"></i>
   	<h2>Cumpleaños</h2>  
   </div>
	
	<div class="cumple widget">
    	<div class="container-fliud">
          <div class="row  separador">
            <div class="col-12 header ">
              <p class="color-rojo">Mayo</p>

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
          <div class="row">
            <div class="col-12">
              <div class="imagen ">
                <img src="../../assets/image/maquila-interna.jpg" width="100%">   
              </div>
              <div class="contenido">
                <p >Pedro</p>
                <span class="separador">Cargo</span>
              </div>
            </div>
        </div>

     </div>
          
  </div>


</div>


</template>
<script>

  export default {
    props: {},
    components: {

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
    },
    error2 (val) {
      if (val) {
        this.warning2 = false
      }
    },
    warning2 (val) {
      if (val) {
        this.error2 = false
      }
    }
    },
    data() {
      return {
        page2: 1,
        date3: null,
        today,
      tomorrow: addToDate(today, { days: 1 }),
      yesterday: subtractFromDate(today, { days: 1 }),
      state: new Date(),
       }
    },
    methods: {}

  }
</script>
<style>
  .cumple .imagen img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .cumple p{
    font-size: 14px;


  }
  .cumple  span{
    font-size: 10px

  }
  .cumple .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
