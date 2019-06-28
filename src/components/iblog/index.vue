<template>

	<div class="col-12 col-md-6 col-lg-4 noticias-items">
		<router-link v-bind:to="'/noticias/'+id">
	
				
			<div class="imagen">
	            <img :src="image" class="img-fluid" :alt="title" width="100%">          
	        </div>
	            <div class="contenido">
	              <p >{{title}}</p>
	              <span >{{date}}</span>
			</div>
		
     </router-link>	   
         </div> 
       
	
</template>
<script>




	export default {
   props: ['title','href','id', 'image', 'date'],
 }



</script>
<style lang='stylus'>
		
</style>