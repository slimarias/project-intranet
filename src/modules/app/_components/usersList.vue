<template>
	<q-list bordered>
		<q-item v-for="user in users" :key="user.id" class="q-my-sm" clickable v-ripple>
			<q-item-section avatar>
				<q-avatar>
					<q-img :src="user.mainImage" :ratio="1"/>
				</q-avatar>
			</q-item-section>
			<q-item-section>
				<q-item-label>{{ user.name }}</q-item-label>
				<q-item-label caption lines="1">{{ user.email }}</q-item-label>
			</q-item-section>
		</q-item>
	</q-list>
</template>

<script>
  export default {
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
            take: this.take,
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

</style>