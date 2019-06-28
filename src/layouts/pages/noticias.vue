
<template>




<div class="noticias-page">

  

<div class="contenedor " v-for="(cat, index) in categories" >

	<div class="row" v-if ="(cat.id==id)">
		<div class="col titulo-categoria">
			{{cat.title}}
		</div>
		<div class="col-auto ">
			<div v-if="(drawer==false)">
			  	<q-btn
			    @click="drawer = !drawer"
			    flat
			    round
			    dense
			    class="btn1 btn2"
			    icon="fa fa-arrow-left"
			  />
			</div>
		</div>
	</div>

            
    <div class="row"  v-if ="(cat.id==id)">

    	  <index  v-for="(post, index) in cat.posts"
                :key="index"
                :title="post.title"
                :href="post.id"
				:image="post.image"
				:date="post.date"
				:id="post.id"
                  >
            </index>
    </div>
    






<q-layout-drawer
      side="right"	
      v-model="drawer"
      :overlay="rightOverlay"
      :behavior="rightBehavior"
      :breakpoint="rightBreakpoint"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
    >
	
 <div class="row titulo-menu">
 	<q-btn
 	class="btn1 col-auto"
    @click="drawer = !drawer"
    flat
    round
    dense
    text=""
    icon="fa fa-arrow-right"
  />
  <h3 class="col">Categorias</h3>
 </div>

     <ul>
	<li v-for="cat in categories">
	 <a v-on:click="say(cat.id)"><i class="fas fa-caret-right"></i>  {{cat.title}}</a>	
	</li>
</ul>
	
    </q-layout-drawer>
 </div>

 
</div>
</template>
<script>
	

    import index from "src/components/iblog/index.vue"; 

    export default {
    components: {
      index,
    
    
    },
	data () {
    	return {
    	views: false,
    	id:"1",
 		drawer: true,
        categories:[
        	{ 
        		title:'Lorem ipsum dolor sit amet',
        		id:'1',
        		posts: [
 		        	{id:'1', title: 'Noticia 1', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 1', date:'2019-06-10 12:30:00'},
		        	{id:'2', title: 'Noticia 2', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 2', date:'2019-06-10 12:30:00'},
		        	{id:'3', title: 'Noticia 3', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 3', date:'2019-06-10 12:30:00'},
		        	{id:'4', title: 'Noticia 4', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 4', date:'2019-06-10 12:30:00'}
		        ]
		    },
		    { 
		    	title:'Lorem ipsum dolor sit amet2',
		    	id:'2',
        		posts: [
 		        	{id:'1', title: 'Noticia 1', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 1', date:'2019-06-10 12:30:00'},
		        	{id:'2', title: 'Noticia 2', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 2', date:'2019-06-10 12:30:00'},
		        	{id:'3', title: 'Noticia 3', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 3', date:'2019-06-10 12:30:00'},
		        	{id:'4', title: 'Noticia 4', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 4', date:'2019-06-10 12:30:00'}
		        ]
		    },
		    { 
		    	title:'Lorem ipsum dolor sit amet3',
		    	id:'3',
        		posts: [
 		        	{id:'1', title: 'Noticia 1', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 1', date:'2019-06-10 12:30:00'},
		        	{id:'2', title: 'Noticia 2', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 2', date:'2019-06-10 12:30:00'},
		        	{id:'3', title: 'Noticia 3', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 3', date:'2019-06-10 12:30:00'},
		        	{id:'4', title: 'Noticia 4', image:'statics/empaque.jpg',content: 'Lorem ipsum dolor sit amet 4', date:'2019-06-10 12:30:00'}
		        ]
		    },


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
.noticias-page
	aside
		margin-top: 30px
		background: color-gris
		ul li 
			list-style: none
			a
				color: color-oscuro
				font-size:12px
				cursor:pointer
				display:block
				padding-bottom:30px
				i
					margin-right: 10px
				&:hover, &:active
					color:color-rojo
	.btn1,.btn2
		background: color-oscuro
		border-radius:0px
		float:right
		height: 50px
		padding:0px 20px
		i
			color:#fff
			font-size: 16px
		&:hover
			color: color-rojo			
			
			i
				color: color-rojo
				cursor:pointer
				
	.titulo-menu
		background: color-oscuro
		width:100%
		height:50px
		margin-bottom:40px
		h3
			font-size:16px
			padding-left:10px
			color:#fff
			margin:0px
	.btn2
		margin-top: 30px
	.contenedor
		.titulo-categoria
			background: color-gris
			height: 50px
			margin: 30px 0
			color:color-rojo
			font-weight:bold
			font-size: 12px
			display:flex
			align-items:center
			padding:0 40px
		
	.noticias-items
		padding:15px

</style>