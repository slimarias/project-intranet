<template>
  <div class="row q-mx-md q-my-md custom-shadow bg-white">
    <div class="col-md-12  relative-position">
      <q-scroll-area style="height: 415px;">
        <q-list no-border	>
          <q-list-header>
            <q-icon
              class="q-mr-md"
              name="fas fa-address-card"
              color="primary"
              size="20px"/>
            Directorio Corporativo
          </q-list-header>
          <q-item-separator />
          <q-item />
            <div class="row">
              <div
                class="col-3 text-center q-mb-xl"
                v-for="(item, index) in users"
                :key="index">
                <img
                  style="cursor: pointer;"
                  @click="openModal = true; userSelected = item"
                  :src="getUrlImg(item.smallImage)"
                  class="custom-avatar">
                <div
                  class="q-subheading"
                  align="center">{{item.fullName}}
                </div>
                <q-btn
                  @click="openModal = true; userSelected = item"
                  inverted
                  :label="$tr('ui.label.viewProfile')"
                  color="primary"
                  flat no-caps/>
              </div>
          </div>
        </q-list>
      </q-scroll-area>
      <inner-loading :visible="visible"/>
      <userProfileModal
        :user="userSelected"
        :opened="openModal"
        @closeModal="openModal = false"/>
    </div>
  </div>
</template>

<script>
  import userProfileModal from 'src/components/quser/userProfileModal'
  export default {
    components:{
      userProfileModal
    },
    props:{
    
    },
    data(){
      return{
        userSelected:{},
        openModal:false,
        visible: false,
        users:[]
      }
    },
    created(){
      this.getUsers(false)
    },
    methods:{
      getUsers(refresh){
        this.visible = true
        let params = {
          refresh: refresh,
          params: {
            include: 'addresses,fields'
          }
        }
        this.$crud.index('apiRoutes.quser.users', params)
          .then( response =>{
            this.users = response.data
            this.visible = false
          })
          .catch( error => {
            this.$alert.error({message : 'Error', timeOut : 4000})
            this.visible = false
          })
      },
      getUrlImg(uri){
        return `${config('apiRoutes.api.base_url')}/${uri}`
      }
    }
  }
</script>

<style>
  .custom-avatar{
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
</style>
