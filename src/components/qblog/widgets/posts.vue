<template>
  <div :class="`row q-mx-md q-my-md ${ shadowVisible ? 'custom-shadow' : ''} bg-white`">
    <div class="col-md-12 relative-position">
      <q-list highlight no-border	>
        <q-list-header v-if="titleVisible">
          <q-icon
            class="q-mr-md"
            name="fa fa-newspaper"
            color="primary"
            size="20px"/>
          Noticias
        </q-list-header>
        <q-item-separator v-if="titleVisible"/>
        <q-item
          class="q-mb-lg"
          v-for="(item, index) in news"
          :key="index">
          <q-item-side>
            <q-item-tile>
              <div
                @click="handlerClick(item)"
                class="product-img pointer"
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
      <inner-loading :visible="visible"/>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      categoryId:{
        type: String,
        defalt: '',
      },
      titleVisible:{
        type:Boolean,
        defalt: true,
      },
      shadowVisible:{
        type:Boolean,
        defalt: true,
      }
    },
    data(){
      return{
        visible: false,
        news: []
      }
    },
    created(){
      this.getNews( false )
    },
    methods:{
      getNews(refresh){
        this.visible = true
        let params = {
          refresh: refresh,
          params: {
            take: 7,
            filter:{
              categories: parseInt(this.categoryId)
            }
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
      },
      handlerClick(item){
        this.$router.push({
          name: 'app.new',
          params:{
            newId: item.id
          }
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
  width 90px
  height 90px
  border 1px solid #dddddd52
</style>
