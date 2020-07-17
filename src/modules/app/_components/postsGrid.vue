<template>
	<div class="row">
		<div class="col-12">
			<section class="post-list">
				<a :href="post.title" class="post" v-for="(post, key) in posts"
				   :key="key"
				   @click.prevent="redirectTo(post)">
					<figure class="post-image">
						<q-img :src="post.mainImage.path" :ratio="1" class="rounded-borders custom-border-radius"/>
					</figure>
					<div class="post-overlay">
						<p>
							<span class="post-comments text-caption text-capitalize text-bold">
								{{ post.title }}
							</span>
						</p>
					</div>
					<div class="post-info-date q-pt-sm text-caption text-grey-5 q-px-sm">
						{{ post.createdAt | date }}
					</div>
					<div class="post-info  text-grey-7 line-clamp q-px-sm">
						{{ post.summary }}
					</div>
				</a>
			</section>
		</div>
		
		<div class="col-12 flex flex-center q-mb-md" v-if="loading">
			<q-spinner
				color="primary"
				size="3em"
				:thickness="2"
			/>
		</div>
		
		<div class="col-12 flex flex-center q-mb-md q-mt-lg" v-if="!(this.page >= this.lastPage) && !loading">
			<q-btn color="primary" class="btn-shadow" rounded @click="getMorePosts">
				{{btnMoreLabel}}
			</q-btn>
		</div>
		
	</div>
</template>

<script>
  import moment from 'moment'
  
  export default {
    name: "postsGrid",
    props: {
      redirectToPost:{
        type: Boolean,
        default: true
      },
      limit:{
        type: String,
	      default: '3'
      },
      categories: {
        type: Array,
        default: () => []
      },
      btnMoreLabel: {
        type: String,
        default: 'Ver Mas'
      }
    },
    data() {
      return {
        loading: false,
        posts: [],
        page: 1,
        take: 20,
        lastPage: 1,
      }
    },
    filters:{
      date: function (value){
        return moment(value).format('d MMMM, YYYY')
      }
    },
    mounted() {
      this.$nextTick( () => {
        this.getPosts()
      })
    },
    methods:{
      getPosts(){
        this.loading = true
        const params = {
          params: {
            filter: {
              categories: this.categories
            },
            include: 'category',
            page: this.page,
            take: this.limit,
          }
        }
        this.$crud.index('apiRoutes.qblog.posts', params)
          .then( response => {
            this.posts.push(...response.data)
            this.take = response.meta.page.perPage
            this.lastPage = response.meta.page.lastPage
            this.loading = false
          })
          .catch( error => {
            this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
            console.warn(error)
            this.loading = false
          })
      },
      getMorePosts(){
        if(this.redirectToPost){
          const defaultCategory  = 1
          this.$router.push({
            name: 'qblog.index',
            params:{
              category: defaultCategory
            }
          })
          return
        }
        this.page = this.page + 1
        this.getPosts()
      },
      redirectTo(post){
        this.$router.push({
          name: 'qblog.show',
          params:{
            category: post.category.slug,
            slugPost: post.slug,
          }
        })
      }
    }
  }
</script>

<style scoped>
	.line-clamp {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.post-list{
		display: grid;
		grid-template-columns: repeat(3, minmax(100px, 250px));
		grid-gap: 28px;
	}
	.post {
		cursor: pointer;
		position: relative;
		display: block;
	}
	.post-image {
		margin: 0;
	}
	.post-image img {
		width: 100%;
		vertical-align: top;
	}
	.post-overlay {
		background: rgba(0, 0, 0, .4);
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		display: none;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: center;
	}
	.post:hover .post-overlay {
		display: flex;
	}
	.post-comments {
		width: 80px;
		margin: 5px;
		text-align: center;
	}
	@media screen and (max-width: 768px) {
		.post-list{
			grid-gap: 3px;
			grid-template-columns: repeat(3, minmax(100px, 250px));
		}
	}
</style>