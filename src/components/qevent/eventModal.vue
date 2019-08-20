<template>
  <q-modal
    no-backdrop-dismiss
    no-esc-dismiss
    v-model="opened"
    :content-css="{minWidth: '20vw', maxWidth: '50vw'}">
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
        <div class="row q-mx-md q-my-md gutter-x-sm">
          <div class="col-md-12 q-mb-md">
            <div class="q-title">{{event.title}}</div>
          </div>
          <div class="col-md-6">
            <div
              class="product-img"
              :style="`background-image: url(${img});`">
            </div>
          </div>
          <div class="col-md-6">
            <div class="row gutter-y-sm">
              <div class="col-md-12">
                <div
                  class="q-body-1"
                  align="justify"
                  v-html="event.description"></div>
              </div>
              <div class="col-md-12">
                <div class="q-body-2">
                  {{(event.startDate)}} - {{(event.endDate)}}
                </div>
                <div class="q-body-2">
                  {{$n(event.price, 'currency', $q.i18n.lang)}}
                </div>
                <div class="q-body-2">
                  {{event.address}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
  export default {
    props:{
      img:{
        type: String,
        default: '',
      },
      event:{
        type: Object,
        default: ()=>({
          mainImage: {
            path: ''
          }
        })
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
