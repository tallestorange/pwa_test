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
          var value = this.$store.state.articles[key]
          if (this.searchOprion.order != "" && value.order != this.searchOprion.order) {
            continue
          }
          var isCheckPassed = true
          for (var algo in this.searchOprion.algorithms) {
            console.log(value.algorithms,algo,this.searchOprion.algorithms)
            if (value.algorithms.indexOf(algo) == -1) {
              isCheckPassed = false
              break
            }
          }
          if (isCheckPassed == true) {
            results[key] = value
          }
        }

        return results
      }
    }
  }
</script>