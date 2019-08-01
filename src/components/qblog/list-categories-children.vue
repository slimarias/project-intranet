<template>
  <q-list highlight no-border>
    <q-item
      link
      class="items-category"
      exact
      :to="redirectTo(item)"
      v-for="(item, index) in items"
      :key="index">
      <q-item-side icon="arrow_right" />
      <q-item-main :label="item.title" />
      <q-item-side v-if="false">
        <q-spinner color="primary"/>
      </q-item-side>
    </q-item>
  </q-list>
</template>

<script>
  export default {
    props:{
      items:{
        type: Array,
        default: () => []
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
          name: 'app.news.category',
          params:{
            categoryId: item.id
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
