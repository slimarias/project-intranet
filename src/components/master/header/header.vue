<template>
  
    <!-- === MENU === -->
    <q-layout-drawer id="menu_master"
                     v-model="leftDrawerOpen"
                     
    >
      <q-list no-border link inset-delimiter>
        <!-- === LOGO === -->
        <q-list-header class="text-center">
          <router-link :to="{ name: 'home'}">
            <a>
              <img src="../../assets/image/logo.png" width="80%">
            </a>
          </router-link>
                 
        </q-list-header>

        <!--= MENU =-->
        <widget-menu></widget-menu>
      </q-list>
    </q-layout-drawer>

    
</template>


<script>
mport widgetMenu from "src/components/menu/widget-menu";
  export default {
    components: {
      WidgetUser},
    
    data() {
      return {
        leftDrawerOpen: false,
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

<style lang="stylus">
  

</style>
