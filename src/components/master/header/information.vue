<template>
  <div id="informationHeader">
    <!--= Desktop =-->
    <div class="desktop-only" style="display: inherit">
      <router-link tag="a" to="/menu" class="infoHeader "> 
        MENÚ
      </router-link>

    
      <router-link tag="a" to="/menu" class="infoHeader">
        ORDER NOW
      </router-link>
    </div>
  </div>
</template>
<script>
  /*Components*/

  export default {
    props: {},
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {}
    },
    methods: {}

  }
</script>
<style lang="stylus">
  @import "~variables";
  #informationHeader
    display inherit
    .infoHeader
      line-height 0%
      padding 20px 28px
      font-weight bold
      font-size 15px
      margin 0px
      color #1f0543
      font-weight bold
      line-height 1.5
      .q-icon
        color $secondary
        margin-right 15px
        font-size 18px
      font
        color $secondary
        font-size 24px
        line-height 0
    .block1, .block2
      border-right 1px solid $grey-4
      h6
        margin-left 28px
    .block3
      padding-right 0
      .q-icon
        &:last-child
          margin 0

    .infoMobil
      border 0
      .q-item
        a
          text-decoration none
          color $primary
        .q-icon
          color $secondary
          margin-right 7px
          font-size 18px
        &:nth-child(1)
          .q-icon
            margin-right 25px
    a
      text-decoration none
      
    a:visited
        color #1f0543

    a:link
      color #1f0543

    .router-link-active
      color #f44336!important
</style>
