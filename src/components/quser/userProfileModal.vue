<template>
  <q-modal
    no-backdrop-dismiss
    no-esc-dismiss
    v-model="opened"
    :content-css="{minWidth: '20vw'}">
    <q-modal-layout>
      <q-btn
        @click="$emit('closeModal')"
        flat
        style="position: absolute; top: 5px;right: 5px;"
        color="primary"
        round
        dense
        v-close-overlay
        icon="cancel"/>
      <div>
        <div class="row">
          <div class="col-md-5 q-py-lg q-pl-lg">
            <img
              :src="getUrlImg(user.smallImage)"
              class="custom-avatar">
          </div>
          <div class="col-md-7 q-mt-xl q-px-lg q-py-lg">
            <div
              class="q-pb-sm"
              style="border-bottom: 2px #c4c4c4 solid">
              {{user.fullName}}
            </div>
            <div class="text-primary q-body-1 q-mt-sm">
              <b>Cargo: </b>Lorem ipsum
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 q-px-lg q-pb-lg">
  
            <q-list no-border>
              
              <q-item>
                <q-item-side>
                  <q-item-tile avatar>
                    <q-btn icon="fas fa-phone" round color="primary" size="xs"/>
                  </q-item-tile>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>
                    <b>{{$tr('ui.form.phone')}}:</b>
                  </q-item-tile>
                  <q-item-tile sublabel>
                    {{getPhone(user.fields).value}}
                  </q-item-tile>
                </q-item-main>
              </q-item>
  
              <q-item>
                <q-item-side>
                  <q-item-tile avatar>
                    <q-btn icon="email" round color="primary" size="xs"/>
                  </q-item-tile>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>
                    <b>{{$tr('ui.form.email')}}:</b>
                  </q-item-tile>
                  <q-item-tile sublabel>
                    {{user.email}}
                  </q-item-tile>
                </q-item-main>
              </q-item>
  
              <q-item>
                <q-item-side>
                  <q-item-tile avatar>
                    <q-btn icon="place" round color="primary" size="xs"/>
                  </q-item-tile>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>
                    <b>{{$tr('ui.form.address')}}:</b>
                  </q-item-tile>
                  <q-item-tile sublabel>
                    <div v-if="user.addresses.length">
                      <span v-for="(address, index) in user.addresses" :key="index">
                        {{address.address1}}, {{address.city}}, {{address.state}}, {{address.country}}. <br>
                      </span>
                    </div>
                    <div v-else>
                      {{$tr('ui.message.notFound')}}
                    </div>
                  </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
            
          </div>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
  export default {
    props:{
      user:{
        type:Object,
        default: ()=>{}
      },
      opened:{
        type: Boolean,
        default: false,
      }
    },
    data(){
      return {
      }
    },
    methods: {
      getUrlImg(uri){
        return `${config('apiRoutes.api.base_url')}/${uri}`
      },
      getPhone(fields){
        if (!fields.length){
          return {value: this.$tr('ui.message.notFound')}
        }
        return fields.find(field => {
          return field.name == 'cellularPhone'
        })
      }
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
