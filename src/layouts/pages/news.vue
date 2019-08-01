<template>
  <div class="row relative-position q-mt-lg">
    <div class="row" style="min-width: 100%">
      <div class="col-md-8 relative-position" style="border-right: #9e9e9e4d solid 1px;">
        <q-toolbar color="grey-4">
          <q-toolbar-title class="text-primary">
            Noticias
          </q-toolbar-title>
        </q-toolbar>
        <div class="row q-px-lg q-py-xl">
          <div class="col-md-12 q-px-sm">
            <gridPosts :news="table.data"/>
          </div>
          <div class="col-md-12 q-pt-sm">
            <div
              class="flex flex-center"
              v-if="table.pagination.lastPage > 1">
              <q-pagination
                direction-links
                class="col-12 text-center"
                v-model="table.pagination.page"
                :max="table.pagination.lastPage"
                @input="getDataTable"/>
            </div>
          </div>
        </div>
        <inner-loading
          :visible="visible"/>
      </div>
      <div class="col-md-4">
        <q-toolbar color="grey-7">
          <q-toolbar-title >
            <q-icon name="fas fa-arrow-right"/> Categorias
          </q-toolbar-title>
        </q-toolbar>
        <div class="row q-px-lg q-py-xl">
          <div class="col-md-12 q-px-sm">
            <listCategories/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gridPosts from 'src/components/qblog/grid-posts'
  import listCategories from 'src/components/qblog/list-categories'
  export default {
    components:{
      gridPosts,
      listCategories
    },
    data() {
      return{
        visible: false,
        table: {
          data: [],
          pagination: {
            page: 1,
            rowsNumber: '',
            rowsPerPage: 9,
            lastPage:0,
          },
        },
      }
    },
    created() {
      this.$nextTick(function () {
        this.getDataTable(true)
      })
    },
    watch:{
      '$route.params.categoryId': function (val) {
        this.table.pagination = {
          page: 1,
          rowsNumber: '',
          rowsPerPage: 9,
          lastPage:0,
        }
        this.getDataTable(true)
      }
    },
    methods: {
      getDataTable(refresh = false) {
        this.getData({pagination: this.table.pagination}, refresh)
      },
      getData({pagination, filter}, refresh = false) {
        this.visible = true
        let params = {
          refresh: refresh,
          params: {
            filter: {
              categories: parseInt(this.$route.params.categoryId)
            },
            page: pagination.page,
            take: pagination.rowsPerPage,
          }
        }
        this.$crud.index('apiRoutes.qblog.posts', params)
        .then( response =>{
          this.table.data = response.data
          this.table.pagination.page = response.meta.page.currentPage
          this.table.pagination.rowsNumber = response.meta.page.total
          this.table.pagination.rowsPerPage = pagination.rowsPerPage
          this.table.pagination.lastPage = response.meta.page.lastPage
          this.visible = false
        })
        .catch( error => {
          this.$alert.error({message : this.$tr('ui.message.errorRequest'), timeOut : 4000})
          this.visible = false
        })
      },
    }
  }
</script>
