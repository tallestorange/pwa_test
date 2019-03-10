<template>
  <v-content>
    <v-layout justify-center>
      <v-flex xs11 sm9 md7>
        <div v-for="article in articles" style="margin: 8px;">
          <problem-card :article="article"></problem-card>
        </div>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import ProblemCard from '../components/ProblemCard.vue'

  export default {
    components: {
      ProblemCard
    },
    data () {
      return {
        searchOprion: this.$store.getters["getSearchOptions"],
      }
    },
    computed: {
      articles() {
        var results = {}

        for (var key in this.$store.state.articles) {
          var article = this.$store.state.articles[key]
          if (this.searchOprion.order != "" && article.order != this.searchOprion.order) {
            continue
          }
          var isCheckPassed = true
          for (var algo_key in this.searchOprion.algorithms) {
            var algo = this.searchOprion.algorithms[algo_key]
          
            if (article.algorithms.indexOf(algo) == -1) {
              isCheckPassed = false
              break
            }
          }
          if (isCheckPassed == true) {
            results[key] = article
          }
        }

        return results
      }
    }
  }
</script>