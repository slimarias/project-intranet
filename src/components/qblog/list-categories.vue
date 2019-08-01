<template>
  <div class="relative-position">
    <listCategoriesChildren
      :items="categories"/>
    <inner-loading
      :visible="visible"/>
  </div>
</template>

<script>
  import listCategoriesChildren from 'src/components/qblog/list-categories-children'
  export default {
    name:'listCategories',
    components:{
      listCategoriesChildren
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
            this.categories = response.data
            this.visible = false
          })
          .catch( error => {
            this.$alert.error({message : 'Error', timeOut : 4000})
            this.visible = false
          })
      },
      orderCategoriesToMenu(categories){
        return categories.map( category => {
          let response = {
            title: category.title ? category.title : category.label,
            name: 'app.new',
            params: {categoryId: category.id},
            permission: null,
            activated: true,
            parentId: category.parentId,
          }
          if (category.children !== null){
            response.children = this.orderCategoriesToMenu(category.children)
          }
          return response
        })
      }
    }
  }
</script>
