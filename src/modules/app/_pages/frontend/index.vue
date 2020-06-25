<template>
  <q-page>
	  
	  <div class="row">
		  <div class="col-3">
			  <posts/>
		  </div>
	  </div>
	  
	  
  </q-page>
</template>

<style lang="stylus">

</style>

<script>
	import posts from "../../_components/posts";
  export default {
    name: 'PageIndex',
	  components:{
      posts
	  }
  }
</script>
