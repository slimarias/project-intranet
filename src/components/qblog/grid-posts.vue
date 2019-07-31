<template>
  <div class="row relative-position">
    <q-card
      class="col-4 no-shadow q-px-md q-mb-xl"
      v-for="(item, index) in news"
      :key="index">
      <q-card-media>
        <div
          class="product-img"
          :style="`background-image: url(${item.options.mainimage});`">
        </div>
      </q-card-media>
      <q-card-title>
        {{item.title}}
        <span
          slot="subtitle">
          {{$trd(item.createdAt)}}
        </span>
      </q-card-title>
    </q-card>
    <inner-loading :visible="visible"/>
  </div>
</template>

<script>
  export default {
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

<style lang="stylus">
  @import "~variables";
  .product-img
    background-position center
    background-repeat no-repeat
    background-size cover
    height 300px
    border 1px solid #dddddd52
</style>
