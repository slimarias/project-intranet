<template>
  <div class="q-layout-page q-px-lg q-py-lg">
    <div class="row q-my-lg gutter-x-sm">
      <div class="col-md-6">
        <treeselect
          :clearable="false"
          :options="table.options.departments"
          @input="getDataTable(true)"
          value-consists-of="BRANCH_PRIORITY"
          v-model="table.filters.departmentId"
          placeholder=""/>
      </div>
      <div class="col-md-6">
        <q-search
          @input="getDataTable"
          clearable
          class="search"
          :placeholder="$tr('ui.label.search')"
          v-model="table.filter.search"/>
      </div>
      <div class="col-md-1 flex justify-end" v-if="false">
        <q-btn
          round
          icon="fas fa-sync-alt"
          color="info"
          class="q-ml-xs"
          @click="getDataTable(true)"
          rounded>
          <q-tooltip :delay="300">
            {{$tr('ui.label.refresh')}}
          </q-tooltip>
        </q-btn>
      </div>
    </div>
    <div class="row gutter-x-sm gutter-y-sm relative-position">
      <userProfile
        inverted
        class="col-md-6"
        :user="user"
        v-for="(user, index) in table.data"
        :key="index"/>
      <inner-loading :visible="loading"/>
    </div>
    <div
      class="flex flex-center q-mt-md"
      v-if="table.pagination.lastPage > 1">
      <q-pagination
        direction-links
        class="col-12 text-center"
        v-model="table.pagination.page"
        :max="table.pagination.lastPage"
        @input="getDataTable"/>
    </div>
  </div>
</template>

<script>
  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
  import userProfile from 'src/components/quser/userProfile'
  export default {
    components:{
      Treeselect,
      userProfile
    },
    data () {
      return{
        loading: false,
        table: {
          data: [],
          pagination: {
            page: 1,
            rowsNumber: '',
            rowsPerPage: 10,
            lastPage:0,
          },
          filter: {
            search: null
          },
          filters:{
            departmentId: 0
          },
          options:{
            departments:[]
          }
        },
      }
    },
    created(){
      this.$nextTick(function () {
        this.getDataTable()
        this.getDepartments()
      })
    },
    methods:{
      getDataTable(refresh = false) {
        this.getData({pagination: this.table.pagination}, refresh)
      },
      getData({pagination, filter}, refresh = false) {
        this.loading = true
        let params = {
          refresh: refresh,
          params: {
            filter: Object.assign({}, this.table.filter, this.table.filters),
            page: pagination.page,
            take: pagination.rowsPerPage,
            include: 'addresses,fields'
          }
        }
        this.$crud.index('apiRoutes.quser.users', params)
        .then( response =>{
          this.table.data = response.data
          this.table.pagination.page = response.meta.page.currentPage
          this.table.pagination.rowsNumber = response.meta.page.total
          this.table.pagination.rowsPerPage = pagination.rowsPerPage
          this.table.pagination.lastPage = response.meta.page.lastPage
          this.loading = false
        })
        .catch( error => {
          this.$alert.error({message : this.$tr('ui.message.errorRequest'), timeOut : 4000})
          this.loading = false
        })
      },
      getDepartments(){
        this.loading = true
        let params= {}
        this.$crud.index('apiRoutes.quser.departments', params)
        .then( response => {
          let departments = this.$helper.array.tree(response.data)
          departments.unshift({label: this.$tr('ui.label.all'), id: 0})
          this.table.options.departments = departments
          this.loading = false
        })
        .catch( error => {
          this.$alert.error({message : this.$tr('ui.message.errorRequest'), timeOut : 4000})
          this.loading = false
        })
      },
    }
  }
</script>
