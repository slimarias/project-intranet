<template>
  <div>
    <pre>{{event}}</pre>
  </div>
</template>

<script>
  export default {
    props: {
      event: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
      
      }
    }
  }
</script>
