<template>
  <v-content>
  <div>
    {{articles[$route.params.value]}}
  </div>
  </v-content>
</template>

<script>
import articles from '../assets/articles.json'

  export default {
    components: {
    },
    data () {
      return {
          articles: articles
      }
    }
  }
</script>
