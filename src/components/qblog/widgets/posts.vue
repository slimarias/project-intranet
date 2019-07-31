<template>
  <div class="row q-mx-md q-my-md custom-shadow bg-white">
    <div class="col-md-12 relative-position">
      <q-scroll-area style="height: 870px;">
      <q-list highlight no-border	>
        <q-list-header>
          <q-icon
            class="q-mr-md"
            name="fa fa-newspaper"
            color="primary"
            size="20px"/>
          Noticias
        </q-list-header>
        <q-item-separator />
        <q-item
          v-for="(item, index) in news"
          :key="index">
          <q-item-side>
            <q-item-tile>
              <div class="product-img"
                :style="`background-image: url(${item.options.mainimage});`">
              </div>
            </q-item-tile>
          </q-item-side>
          <q-item-main
            :label="item.title"
            :sublabel="$trd(item.createdAt)"/>
        </q-item>
        <q-item-separator />
      </q-list>
      </q-scroll-area>
      <inner-loading :visible="visible"/>
    </div>
  </div>
</template>

<script>
  export default {
    props:{

    },
    data(){
      return{
        visible: false,
        news: []
      }
    },
    created(){
      this.getNews(false)
    },
    methods:{
      getNews(refresh){
        this.visible = true
        let params = {
          refresh: refresh,
          params: {
          }
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

<style scoped lang="stylus">
@import "~variables";
.product-img
  background-position center
  background-repeat no-repeat
  background-size cover
  width 100px
  height 100px
  border 1px solid #dddddd52
</style>
