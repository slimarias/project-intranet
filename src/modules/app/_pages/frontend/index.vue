<template>
  <q-page>
	  
	  <div class="row">
		  <div class="col-12">
			 
		  </div>
	  </div>
	  
	  
  </q-page>
</template>

<style lang="stylus">

</style>

<script>
	import posts from "../../_components/postsList";
	import postsGrid from "../../_components/postsGrid";
	
	import usersList from "../../_components/usersList";
	import usersGrid from "../../_components/usersGrid";
	
  export default {
    name: 'PageIndex',
	  components:{
      posts,
      postsGrid,
      usersList,
      usersGrid,
	  }
  }
</script>
