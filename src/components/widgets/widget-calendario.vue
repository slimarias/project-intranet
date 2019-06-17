<template>
<div class="calendario">
  
  <div class="calendario widget">
    <div class="container-fliud">
      <div class="row evento">
        <div class="col-2 ">
          <p :class="span"><i class="fas fa-circle"></i></p>
        </div>
        <div class="col-10">
          <span class="">{{fecha}}</span>
          <a :href="href">{{titulo}}</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>

  export default {
    props: ['titulo','span','fecha','href'],
    components: {

    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
       
      })
    },
    data() {
      return {
      }
    },
    methods: {}

  }
</script>
<style>
.calendario span{
  display: block;
}
.calendario .evento{
  padding:10px 0px;
}
</style>
