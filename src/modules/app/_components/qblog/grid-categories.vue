<template>
  <div class="relative-position full-height">
    <div class="text-h6 bg-grey-7 text-white q-pa-xs">
      <q-list highlight no-border>
        <q-item>
          <q-item-section avatar>
            <q-icon name="arrow_right_alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-capitalize">
              {{ Object.keys(parentCategory).length > 0 ? parentCategory.title : $trp('ui.form.category') }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div v-if="categories.length > 0" class="full-width">
      <grid-categories-children
        :items="categories" v-if="gridStyle==1" :cols="cols"/>
      <grid-categories-children-2
         :items="categories" v-if="gridStyle==2" :cols="cols" />
    </div>
    <div class="absolute-center full-width" v-else>
      <not-result />
    </div>
    <inner-loading
      :visible="visible"/>
  </div>
</template>

<script>
  import gridCategoriesChildren from './grid-categories-children'
  import gridCategoriesChildren2 from './grid-categories-children-2'
  export default {
    name:'listCategories',
    components:{
      gridCategoriesChildren,
      gridCategoriesChildren2
    },
    props:{
      slug:{
        default: null
      },
      gridStyle:{
        default: 1
      },
      cols:{
        default: 3,
      }
    },
    watch:{
      slug(){
        this.getCategories(true)
      }
    },
    data(){
      return{
        visible: false,
        categories: [],
        parentCategory: {},
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
        if(this.slug !== null) {
          params.params = {
            include: 'children',
            filter: {
              field: isNaN(this.slug) ? 'slug' : 'id',
            }
          }
          this.$crud.show('apiRoutes.qblog.categories', this.slug, params)
            .then(response => {
              //this.$helper.array.builTree
              this.parentCategory = response.data
              this.categories = response.data.children
              this.visible = false
            })
            .catch(error => {
              this.categories = []
              this.parentCategory = {}
              this.$alert.error({message: 'Error', timeOut: 4000})
              this.visible = false
            })
        }else{
          this.$crud.index('apiRoutes.qblog.categories', params)
              .then(response => {
                //this.$helper.array.builTree
                this.categories = response.data
                this.visible = false
              })
              .catch(error => {
                this.categories = []
                this.parentCategory = {}
                this.$alert.error({message: 'Error', timeOut: 4000})
                this.visible = false
              })
        }
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
