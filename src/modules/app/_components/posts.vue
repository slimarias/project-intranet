<template>
	<div class="row" style="border: 1px solid #f2f2f2">
		<div class="col-12">
			<q-list padding class="rounded-borders">
				<q-item v-for="(post, key) in posts" :key="key" clickable v-ripple>
					<q-item-section top avatar>
						<q-avatar rounded size="100px">
							<q-img
								:src="post.mainImage.path"
								style="width: 100px; height:100px; overflow: hidden"/>
						</q-avatar>
					</q-item-section>
					<q-item-section>
						<q-item-label class="text-h6 text-bold text-primary">
							{{ post.title }}
						</q-item-label>
						<q-item-label class="text-justify">
							{{ post.summary }}
						</q-item-label>
						<q-item-label caption>
							{{ post.createdAt }}
						</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</div>
		
		<div class="col-12 flex flex-center q-mb-md">
			<q-btn color="primary" outline>
				Mas
			</q-btn>
		</div>
	</div>
</template>

<script>
  export default {
    name: "posts",
	  data() {
      return {
        loading: false,
        posts: [],
        page: 1,
        take: 10,
        lastPage: 1,
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
              //categories: this.idResource
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
	  }
  }
</script>

<style scoped>

</style>