<template>
	<q-list>
		<q-item v-for="user in users" :key="user.id" class="q-my-sm">
			<q-item-section avatar>
				<q-avatar size="50px">
					<q-img :src="user.mainImage" :ratio="1"/>
				</q-avatar>
			</q-item-section>
			<q-item-section>
				<q-item-label caption>
					11:04
				</q-item-label>
				<q-item-label>
					{{ user.fullName }}
				</q-item-label>
				<q-item-label caption class="line-clamp">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores autem cum...
				</q-item-label>
			</q-item-section>
			
			<q-item-section top side>
				<div class="text-grey-8 q-gutter-xs">
					<q-btn class="gt-xs" size="12px" flat dense round icon="more_vert" />
				</div>
			</q-item-section>
				
		</q-item>
	</q-list>
</template>

<script>
  export default {
    limit:{
      type: String,
      default: '4'
    },
    data () {
      return {
        loading: false,
        users: [],
        page: 1,
        take: 20,
        lastPage: 1,
      }
    },
    mounted() {
      this.$nextTick( () => {
        this.getUsers()
      })
    },
    methods:{
      getUsers(){
        this.loading = true
        const params = {
          params: {
            filter: {},
            include: 'addresses',
            page: this.page,
            take: 5,
          }
        }
        this.$crud.index('apiRoutes.quser.users', params)
          .then( response => {
            this.users.push(...response.data)
            this.take = response.meta.page.perPage
            this.lastPage = response.meta.page.lastPage
            this.loading = false
          })
          .catch( error => {
            this.$alert.error({message: this.$tr('ui.message.errorRequest'), pos: 'bottom'})
            this.loading = false
          })
      },
      getMorePosts(){
        this.page = this.page + 1
        this.getUsers()
      },
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