<template>
  <q-list highlight no-border>
    <q-item
      clickable
      bordered
      class="items-category"
      exact
      :to="redirectTo(item)"
      v-for="(item, index) in items"
      :key="index">
      <q-item-section avatar>
        <q-icon name="arrow_right" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-capitalize">
          {{ item.title }}
        </q-item-label>
      </q-item-section>
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
          name: 'qblog.index',
          params:{
            category: item.slug
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
