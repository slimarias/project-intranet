<template>
  <div class="row q-col-gutter-md q-row-gutter-md category-grid q-py-sm">
    <div :class="`col-12 col-sm-${12/cols}`" v-for="(item,index) in items" :key="index">
      <q-card class="my-card">
        <q-img :src="item.mainImage.path_string || item.mainImage.path" basic :ratio="1">
          <div class="absolute-bottom  text-capitalize">
            <router-link :to="redirectTo(item)" class="text-white">
              {{ item.title }}
            </router-link>
          </div>
        </q-img>
        <q-card-section>
            <div class="full-width category-description" v-html="item.metaDescription || ''"></div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      items:{
        type: Array,
        default: () => []
      },
      cols: {
        default: 3,
      }
    },
    methods:{
      checkChildren(item){
        if (item.children) {
          return true
        }
        return false
      },
      redirectTo(item){
        return {
          name: 'qblog.index',
          params:{
            category: item.slug
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  .category-grid
    .category-description
      img
        width 100%
        height auto
</style>
