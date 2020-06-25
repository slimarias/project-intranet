<template>
	<div class="row relative-position" style="border: 1px solid #f2f2f2">
		<div class="col-12">
			<q-list
				padding
				class="rounded-borders">
				<q-item
					v-for="(post, key) in posts"
					:key="key"
					@click="redirectTo(post)"
					clickable
					v-ripple>
					<q-item-section top avatar>
						<q-avatar square size="100px">
							<q-img
								:src="post.mainImage.path"
								style="width: 100px; height:100px; overflow: hidden"/>
						</q-avatar>
					</q-item-section>
					<q-item-section>
						<q-item-label class="text-h6 text-bold text-primary">
							{{ post.title }}
						</q-item-label>
						<q-item-label class="text-justify line-clamp">
							{{ post.summary }}
						</q-item-label>
						<q-item-label caption class="flex justify-end q-pt-sm">
							{{ post.createdAt | date }}
						</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</div>
		
		<div class="col-12 flex flex-center q-mb-md" v-if="loading">
			<q-spinner
				color="primary"
				size="3em"
				:thickness="2"
			/>
		</div>
		
		<div class="col-12 flex flex-center q-mb-md" v-if="!(this.page >= this.lastPage) && !loading">
			<q-btn color="primary" outline @click="getMorePosts">
				{{btnMoreLabel}}
			</q-btn>
		</div>
	</div>
</template>

<script>
  import moment from 'moment'
  
  export default {
    name: "posts",
	  props: {
      categories: {
        type: Array,
	      default: () => []
      },
		  btnMoreLabel: {
        type: String,
        default: 'Mas'
		  }
	  },
	  data() {
      return {
        loading: false,
        posts: [],
        page: 1,
        take: 5,
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
            take: this.take,
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
</style>