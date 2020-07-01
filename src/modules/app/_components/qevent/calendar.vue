<template>
    <gridCalendar :dataCalendar="table.data"/>
</template>

<script>
    import gridCalendar from './gridCalendar'
    export default {
        name: "calendar",
        components:{
            gridCalendar
        },
        data() {
            return {
                openModal: false,
                eventSelected: {
                    mainImage:{
                        path:''
                    }
                },
                loading: false,
                table: {
                    data: [],
                    pagination: {
                        page: 1,
                        rowsNumber: '',
                        rowsPerPage: 5,
                        lastPage:0,
                    },
                    filter: {
                        search: null
                    },
                    filters:{
                    },
                    options:{
                    }
                },
                users:{
                    data:[],
                    pagination:{
                        page:1,
                        rowsPerPage:10,
                    }
                },
            }
        },
        created() {
            this.$nextTick(function () {
                this.getDataTable( true )
            })
        },
        methods: {
            getDataTable(refresh = false) {
                this.getData({pagination: this.table.pagination}, refresh)
            },
            getData({pagination, filter}, refresh = false) {
                this.loading = true
                let params = {
                    refresh: refresh,
                    params: {
                        page: pagination.page,
                        take: pagination.rowsPerPage,
                        filter: {
                            orderByNow: true
                        }
                    },
                }
                this.$crud.index('apiRoutes.qevent.events', params)
                    .then( response => {
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
            }
        }
    }
</script>

<style scoped>

</style>