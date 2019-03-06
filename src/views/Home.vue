<template>
  <v-content>
      <v-layout justify-center>
      <v-flex xs11 sm7>
        <div v-for="article in articles" style="margin: 5px;">
          <problem-card :article="article"></problem-card>
        </div>
      </v-flex>
      </v-layout>
    </v-content>
</template>

<script>
import ProblemCard from '../components/ProblemCard.vue'
import articles from '../assets/articles.json'

  export default {
    components: {
      ProblemCard
    },
    data () {
    return {
      articles: articles
    }
  }
  }
</script>
