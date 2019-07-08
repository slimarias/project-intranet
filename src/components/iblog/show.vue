
<template>




<div class="noticias-page-show h-100 ">

  

<div class="contenedor container-fluid"  >

 <div class="row" >
 	<div class="col-12 col col-lg-7" >
 		<div v-for="(post, index) in posts">
 			<div class="row" v-if ="(post.id==id)">
				<div class="col titulo-categoria">
					{{post.title}}
				</div>
				<div class="container">
					<div class="row">
					<div class="imagen pr-2 col-12 w-100">
		                <img :src="post.image" width="100%" :alt="post.title">
			        </div>

					<h3 class="titulo  col-12separador">
						{{post.title}}
					</h3>

					<div class="contenido col-12">
						{{post.content}}
					</div>
					</div>
				</div>
			</div>
 		</div>

 	</div>
	<div class="col-12 col-lg-4 ">
	 	
	 	<div class="noti">
	 		<div class="titulo color-rojo col-12 col-md-6 col-lg-4 separador">
	            <i class="fa fa-newspaper"></i>
	            <h2 >Destacados</h2>
		</div>

		<div class="row item-noticia" v-for="post in posts" >
	              <div class="col-4 imagen pr-2  w-100">
	                <img :src="post.image" width="100%" :alt="post.title">
	              </div>
	              <div class="col-6 contenido">
	                <a v-on:click="say(post.id)"><p style="cursor:pointer">{{post.title}}</p>
	                <span>{{post.date}}</span></a>
	              </div>
	    </div>
	 	</div>
	</div>
	      
 </div>

 </div>
</div>
</template>
<script>
	

   export default {
    
	data () {
    	return {
    	views: false,
    	id:"1",
 		drawer: true,
        	
        		title:'Lorem ipsum dolor sit amet',
        		id:'1',
        		posts: [
 		        	{id:'1', title: 'Noticia 1', image:'../statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 1', date:'2019-06-10 12:30:00'},
		        	{id:'2', title: 'Noticia 2', image:'../statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 2', date:'2019-06-10 12:30:00'},
		        	{id:'3', title: 'Noticia 3', image:'../statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 3', date:'2019-06-10 12:30:00'},
		        	{id:'4', title: 'Noticia 4', image:'../statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 4', date:'2019-06-10 12:30:00'}
		        ]
		   


	        
    	}
  	},
  	 methods: {
        say: function (id) {
    
      this.id=id
    }
      }
  	 
}


</script>
<style lang="stylus">
color-oscuro=#555555
color-titulo=#EOEOEO
color-rojo= #EA0304
color-gris= #e8e8e8
.noticias-page-show
	background: #F8F8F8	
	height: 100vh
	.contenedor
		
		.titulo-categoria
			background:color-gris	
			height: 50px
			margin: 30px 0
			color:color-rojo
			font-weight:bold
			font-size: 20px
			display:flex
			align-items:center
			padding:0 40px
		.titulo
			font-weight:bold
			font-size:20px
			display:block
			width:100%
		.noti{
			margin-top:30px
			padding: 20px 15px
		    background: #fff
		    min-height: 100%
		    -webkit-box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31)
		    -moz-box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31)
		    box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31)
		    .item-noticia{
		    	margin:20px 0px

		    }
		    .imagen{
		    	padding-right:20px
		    }   
		    
		    }
			
	
	

</style>