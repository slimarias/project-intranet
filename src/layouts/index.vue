<template>
  <div class="row">
    <div class="col-md-4">
      <news
        :shadowVisible="true"
        :titleVisible="true"/>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-6">
          <events/>
        </div>
        <div class="col-md-6">
          <birthdays/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <users/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
  import news from 'src/components/qblog/widgets/posts'
  import events from 'src/components/qevent/widgets/events'
  import users from 'src/components/quser/widgets/users'
  import birthdays from 'src/components/qevent/widgets/birthdays'
  export default {
    components:{
      news,
      events,
      users,
      birthdays
    },
    name: 'PageIndex',
    data() {
      return {
        lang: this.$q.i18n.lang,
        logo: this.$store.getters['qsiteSettings/getSettingMediaByName']('isite::logo1').path
      }
    }
  }
</script>

<style lang="stylus">
  @import "~variables";
  .custom-shadow
    box-shadow: 9px 8px 9px -2px rgba(149,149,149,0.31);
</style>
