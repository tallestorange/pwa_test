<template>
  <v-content>
  <div>
    {{articles[$route.params.value]}}
  </div>
  </v-content>
</template>

<script>
  export default {
    components: {
    },
    computed: {
      articles() {
        return this.$store.state.articles
      }
    },
    data () {
      return {
      }
    }
  }
</script>
