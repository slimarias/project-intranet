<template>
	<div class="row">
		<div v-for="(user, key) in users" :key="key" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-mb-md">
			<div class="flex flex-center q-mx-md q-my-md">
				<q-avatar size="100px">
					<q-img :src="user.mainImage" :ratio="1" />
				</q-avatar>
			</div>
			<div class="flex flex-center">
				{{user.fullName}}
			</div>
			<div class="flex flex-center">
				<hr width="25%">
			</div>
			<div class="flex flex-center">
				<userProfileModal :user="user"/>
			</div>
		</div>
	</div>
</template>

<script>
	import userProfileModal from "./userProfileModal";
	
  export default {
    name: "usersGrid",
	  components:{
      userProfileModal
	  },
	  data(){
      return{
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