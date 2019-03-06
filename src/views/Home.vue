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
