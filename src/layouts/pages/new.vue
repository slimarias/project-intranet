<template>
  <div class="row relative-position q-mt-lg">
    <div class="row" style="min-width: 100%" v-if="post">
      <div class="col-md-8 relative-position" style="border-right: #9e9e9e4d solid 1px;">
        <q-toolbar color="grey-4">
          <q-toolbar-title class="text-primary">
            {{post.title}}
          </q-toolbar-title>
        </q-toolbar>
        <div class="row">
          <div class="col-md-12 q-px-lg  q-py-lg">
            <div
              class="product-img"
              :style="`background-image: url(${post.options.mainimage});`">
            </div>
          </div>
          <div class="col-md-12 q-px-lg  q-pb-lg  q-title">
            {{post.summary}}
          </div>
          <div class="col-md-12 q-px-lg q-body-1">
            <p v-html="post.description" align="justify"></p>
          </div>
          <div class="col-md-12 q-px-lg ">
            <blockquote>
              <p>{{post.title}}</p>
              <small>Fecha de Publicación <cite :title="post.title">{{$trd(post.createdAt)}}</cite></small>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="col-md-4 bg-white">
        <q-toolbar color="white text-dark">
          <q-toolbar-title >
            <q-icon name="far fa-newspaper" color="primary"/>
            Destacados
          </q-toolbar-title>
        </q-toolbar>
        <div class="row">
          <div class="col-md-12 q-px-lg  q-py-lg">
            <news
              categoryId="1"
              :shadowVisible="false"
              :titleVisible="false"/>
          </div>
        </div>
      </div>
    </div>
    <inner-loading :visible="visible"/>
  </div>
</template>

<script>
  import news from 'src/components/qblog/widgets/posts'
  export default {
    components:{
      news,
    },
    data(){
      return {
        visible: false,
        post: false
      }
    },
    watch:{
      '$route.params.newId': function (val) {
        this.getData(true)
      }
    },
    created() {
      this.$nextTick(function () {
        this.getData(true)
      })
    },
    methods:{
      getData(refresh){
        this.visible = true
        let params= {
          refresh: refresh,
        }
        let criteria = this.$route.params.newId
        this.$crud.show('apiRoutes.qblog.posts', criteria, params)
        .then( response => {
          this.post = response.data
          this.visible = false
        })
        .catch( error => {
          this.$alert.error({message : this.$tr('ui.message.errorRequest'), timeOut : 4000})
          this.visible = false
        })
      }
    }
  }
</script>

<style scoped>

</style>
