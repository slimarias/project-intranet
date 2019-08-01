<template>
    <q-scroll-area style=" height: 700px;">
      <div class="row">
      <q-card
        class="col-4 no-shadow q-px-md q-mb-xl"
        v-for="(item, index) in news"
        :key="index">
        <q-card-media>
          <div
            @click="handlerClick(item)"
            class="product-img pointer"
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
      </div>
    </q-scroll-area>
  
</template>

<script>
  export default {
    props:{
      news:{
        type:Array,
        default:()=>[]
      }
    },
    data() {
      return{
      }
    },
    methods: {
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

<style lang="stylus">
  @import "~variables";
  .product-img
    background-position center
    background-repeat no-repeat
    background-size cover
    height 300px
    border 1px solid #dddddd52
  
  .pointer
    cursor pointer
</style>
