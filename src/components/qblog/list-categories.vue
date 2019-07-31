<template>
  <div>
    <recursiveItem :menu="categories"/>
  </div>
</template>

<script>
  import recursiveItem from 'src/components/master/recursiveItem'
  export default {
    components:{
      recursiveItem
    },
    data(){
      return{
        visible: false,
        categories: [],
      }
    },
    created() {
      this.getCategories(true)
    },
    methods:{
      getCategories(refresh){
        this.visible = true
        let params = {
          refresh: refresh,
          params: {},
        }
        this.$crud.index('apiRoutes.qblog.categories', params)
          .then( response =>{
            //this.$helper.array.builTree
            this.categories = this.orderCategoriesToMenu(response.data)
            this.visible = false
          })
          .catch( error => {
            this.$alert.error({message : 'Error', timeOut : 4000})
            this.visible = false
          })
      },
      orderCategoriesToMenu(categories){
        return categories.map( category => {
          return {
            title: category.title ? category.title : category.label,
            name: 'app.new',
            params: {categoryId: category.id},
            permission: null,
            activated: true,
            parentId: category.parentId,
          }
        })
      }
    }
  }
</script>
