<template>
  <div>
    <q-card class="relative-position custom-shadow bg-white">
      <q-card-main>
        <div :class='`row ${true ? "flex flex-center" : ""}`'>
          <div class="col-md-3 text-center q-my-md">
            <img :src="(user.smallImage)" class="custom-avatar">
          </div>
          <div class="col-md-9 q-mt-lg q-px-lg q-py-lg">
            <div
              class="q-pb-sm"
              style="border-bottom: 1px #c4c4c4 solid">
              {{user.fullName}}
            </div>
            <div class="text-primary q-body-1 q-mt-sm">
              <b>Cargo: </b> Lorem ipsum
            </div>
            <div>
              <q-list no-border >
                <q-item style="padding: 8px 0px;">
                  <q-item-side>
                    <q-item-tile avatar>
                      <q-btn icon="fas fa-phone" round color="primary" size="7px"/>
                    </q-item-tile>
                  </q-item-side>
                  <q-item-main>
                    <q-item-tile label>
                      <b>{{$tr('ui.form.phone')}}:</b>
                    </q-item-tile>
                    <q-item-tile sublabel>
                      {{user.fields.cellularPhone.value}}
                    </q-item-tile>
                  </q-item-main>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
        <q-btn
          @click="openModal = true"
          style="position: absolute; bottom: 10px;right: 15px;"
          :label="$tr('ui.label.viewProfile')"
          flat color="primary"
          no-caps
          icon="add"
          dense/>
      </q-card-main>
    </q-card>
    
    <userProfileModal
      :user="user"
      :opened="openModal"
      @closeModal="openModal = false"/>
  </div>
</template>

<script>
  import userProfileModal from 'src/components/quser/userProfileModal'
  export default {
    components:{
      userProfileModal
    },
    props:{
      user:{
        type: Object,
        default: () => {
          return {
            smallImage: 'modules/iprofile/img/default.jpg',
            fields:{
              cellularPhone: {
                name: "cellularPhone",
                value: ""
              }
            }
          }
        }
      }
    },
    data () {
      return {
        openModal:false
      }
    },
    methods:{
      getUrlImg(uri){
        return `${config('apiRoutes.api.base_url')}/${uri}`
      },
    }
  }
</script>

<style scoped>
  .custom-avatar{
    border: 4px #c4c4c470 solid;
    border-radius: 50%;
    width: 125px;
    height: 125px;
  }
</style>
