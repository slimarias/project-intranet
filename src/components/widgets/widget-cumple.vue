<template>
<div>
  
	<div class="cumple">
    	
          <div class="row">
            <div class="col-12  contenido">
              <div class="imagen ">
                <img :src="imagen" :alt="titulo" width="100%">   
              </div>
              <div class="content">
                <p >{{titulo}}</p>
                <span class="color-rojo"><strong>{{cargo}}</strong></span>
              </div>
            </div>
          </div>
           

     </div>
          
  </div>


</div>


</template>
<script>

  export default {
     props: ['titulo','imagen','cargo', 'href'],
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
  .cumple .contenido .imagen img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .cumple .contenido .content span{
    width: 100%;
    display: block;
  }
  
  .cumple .contenido{
    display: flex;
    align-items: center;
    padding: 10px 0px;
  }
  
</style>
