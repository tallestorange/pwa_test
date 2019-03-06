<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">competitive programming</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-layout justify-center>
      <v-flex xs7>
        <div v-for="article in articles" style="margin: 5px;">

          <v-card>
            <v-layout row>
              <v-card-title primary-title>
                <div class="headline font-weight-bold">{{article.title}}</div>
              </v-card-title>
              <v-spacer></v-spacer>
              <div style="margin: 5px;">{{article.score}}</div>
            </v-layout>

            <v-divider></v-divider>

            <v-card-actions>
              難易度
              <v-spacer></v-spacer>
              <v-rating half-increments size="20" :value="article.difficulty" readonly></v-rating>
            </v-card-actions>

            <v-flex>
              <v-card-actions>
                要復習度
                <v-spacer></v-spacer>
                <v-rating half-increments size="20" :value="article.importance" readonly></v-rating>
              </v-card-actions>
            </v-flex>
          </v-card>

        </div>
      </v-flex>
      </v-layout>
    </v-content>

  </v-app>
</template>

<script>
import articles from './articles.json'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      articles: articles
    }
  }
}
</script>
