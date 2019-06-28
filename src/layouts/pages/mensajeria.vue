<template>


  <div class=" mensajeria-page">
  <div class="row marg"></div>
  <div class="contenedor">
  <div class="row ">
    
    
        <div class="col  titulo-msg">
        Paola
      
        </div>     
        <div v-if="(drawer==false)" class="col-auto">
            <q-btn
            @click="drawer = !drawer"
            flat
            round
            dense
            class="btn1 btn2"
            icon="fa fa-arrow-left"
          />
       
     </div>
     
    </div>   
    <q-page class="col-12 ">
      <transition name="slide-fade">  
        <div v-show="visible" class="msg" >
          <q-chat-message
            v-for="(msg, index) in messages"
            :key="`reg-${index}`"
            :label="msg.label"
            :sent="msg.sent"
            text-color="white"
            :bg-color="msg.bgColor"
            :name="msg.name"
            :avatar="msg.avatar"
            :text="msg.text"
            :stamp="msg.stamp"
          />
          <q-chat-message
            name="Vladimir"
            avatar="statics/empaque.jpg"
          >
            <q-spinner-dots size="2rem" />
          </q-chat-message>
        </div>
      </transition>


    </q-page>
     


     <q-layout-drawer
      side="right"  
      v-model="drawer"
      :overlay="rightOverlay"
      :behavior="rightBehavior"
      :breakpoint="rightBreakpoint"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
      >
         <div class="row titulo-menu">
            <q-btn
            class="btn1 col-auto"
              @click="drawer = !drawer"
              flat
              round
              dense
              text=""
              icon="fa fa-arrow-right"
            />
            <h3 class="col">Mensajes Directos</h3>
         </div>

             <ul>
            <li v-for="cat in categories">
             <a v-on:click="say(cat.id)"><i class="fas fa-caret-right"></i>  {{cat.title}}</a>  
            </li>
          </ul>
  
        </q-layout-drawer>
    </div> 
  </div>
</div> 
 </template>

<script>
export default {
  data () {
    return {
      visible: true,
      message: '',
      drawer:true,
      messages: [
        {
          label: 'Viernes'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/empaque.jpg',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          bgColor: 'black',
          avatar: 'statics/empaque.jpg',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/empaque.jpg',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Lunes'
        },
        {
          name: 'Vladimir',
          bgColor: 'amber',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/empaque.jpg',
          stamp: '13:55'
        },
        {
          label: 'Sabado'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/empaque.jpg',
          stamp: 'Yesterday 13:34'
        },
       
      ]
    }
  },

}
</script>
<style lang="stylus">
color-oscuro=#555555
color-titulo=#EOEOEO
color-rojo= #EA0304
color-gris= #e8e8e8
.mensajeria-page
  .marg
    width: 100%
    height: 80px
    background: #f8f8f8
    position: fixed
    top:0px
  aside
    margin-top: 30px
    background: color-gris
    ul li 
      list-style: none
      a
        color: color-oscuro
        font-size:12px
        cursor:pointer
        display:block
        padding-bottom:30px
        i
          margin-right: 10px
        &:hover
          color:color-rojo
  .btn1,.btn2
    background: color-oscuro
    border-radius:0px
    float:right
    height: 50px
    padding:0px 20px
    i
      color:#fff
      font-size: 16px
    &:hover
      color: color-rojo     
      
      i
        color: color-rojo
        cursor:pointer
        
  .titulo-menu
    background: color-oscuro
    width:100%
    height:50px
    margin-bottom:40px
    h3
      font-size:16px
      padding-left:10px
      color:#fff
      margin:0px
  .btn2
    margin-top: 30px
    position:fixed
    right:0
  .contenedor
    
    .titulo-msg
      padding: 15px 30px
      background: color-gris
      height: 50px
      margin-top: 30px 
.msg
  padding:30px      
  .q-message
    .q-message-container
      img 
        max-width:50px
        max-height:50px
  .q-message-text-content
    font-size: 12px
  .q-message-stamp
    font-size:10px
  .q-message-sent .q-message-text 
      background: #177EFF !important
      color: #fff !important
      border-radius: 3px 3px 0 3px;

  .q-message-received .q-message-text 
      background: #17B0FF !important
      color: #fff !important
      border-radius: 3px 3px 0 3px;
  .q-message-label
    border-top: 1px solid color-gris
  circle
    color: #fff

</style>