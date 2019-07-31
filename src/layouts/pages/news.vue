<template>
  <div class="row">
    <div class="col-md-9">
      <gridPosts/>
    </div>
    <div class="col-md-3">
      <listCategories/>
    </div>
  </div>
</template>

<script>
  import gridPosts from 'src/components/qblog/grid-posts'
  import listCategories from 'src/components/qblog/list-categories'
  export default {
    components:{
      gridPosts,
      listCategories
    },
    data() {
      return{
        visible: false,
        news: []
      }
    },
    created() {
    this.getNews(false)
    },
    methods: {
      getNews(refresh){
        this.visible = true
        let params = {
          refresh: refresh,
          params: {
          },
        }
        this.$crud.index('apiRoutes.qblog.posts', params)
          .then( response =>{
            this.news = response.data
            this.visible = false
          })
          .catch( error => {
            this.$alert.error({message : 'Error', timeOut : 4000})
            this.visible = false
          })
      }
    }
  }
</script>
