<template>
  <q-layout view="lHh LpR lFr">

    <!-- === HEADER === -->
<q-layout-header class="no-shadow">
      <q-toolbar color="red-14">
        <!--= BUTTON MENU =-->
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>


        <!--= TITLE =-->
        <q-toolbar-title class="gt-xs">
          EN RED GROUP
        </q-toolbar-title>
        
        <router-link tag="span" class="float-right " style="cursor: pointer; ">
                Mis Notas
                
        </router-link>

        <!--= FULLSCREEN =-->
        <q-btn flat dense
               class="desktop-only"
               :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
               @click="toggleFullscreen()"></q-btn>
       </q-toolbar>

  </q-layout-header>
    <!-- === MENU === -->
    <q-layout-drawer id="menu_master"
                     v-model="leftDrawerOpen"
                     show-if-above
          elevated
          

    >
      <q-list no-border  inset-delimiter>
        <!-- === LOGO === -->
        <q-list-header class="text-center img-header">
          <router-link :to="{ name: 'home'}">
            <a>
              <img src="../assets/image/logo.png" width="80%">
            </a>
          </router-link>
                 
        </q-list-header>

        <!--= MENU =-->
        <widget-menu></widget-menu>
      </q-list>
    </q-layout-drawer>

    <!-- === ROUTER VIEW === -->
    <q-page-container class="bg-primary1">
      <router-view/>
    </q-page-container>


    <!-- === BACK TO TOP === -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        v-back-to-top.animate="{offset: 500, duration: 200}"
        round
        color="primary"
        icon="keyboard_arrow_up"
      />
    </q-page-sticky>

  </q-layout>
</template>

<script>
  import WidgetUser from "@imagina/quser/_components/widget-user";
  import WidgetUserDepartment from "@imagina/quser/_components/widget-user-department";
  import widgetMenu from "src/components/menu/widget-menu";

  export default {
    components: {
      widgetMenu,
      WidgetUserDepartment,
      WidgetUser},
    mounted() {
      this.$nextTick(function () {})
    },
    data() {
      return {
        leftDrawerOpen: true,
        drawerState: true,
      }
    },
    methods: {
      toggleFullscreen() {
        this.$q.fullscreen.toggle()
      },
    }
  }
</script>

<style>
a:hover{
  color: #EA0304;}
.color-rojo{
  color: #EA0304;}

.bg-primary1{
  background: #f1f1f1;
}
.img-header{
  max-width: 290px;
}
.q-list .q-item {
  padding: 30px 50px;
  margin:auto;
  font-size: 14px;
  color: #959595;

}
.separador{
  border-bottom: 1px solid #C4C4C4;
}
.q-list .q-item:hover, 
.q-list .q-item:focus,
 .q-list .q-item:hover .q-item-side, 
 .q-item:focus .q-item-side{
  color: #EA0304;
  background: #fff;

}
.q-item.active, .q-item.router-link-active, .q-item:focus{
  background: #fff;
}
</style>
