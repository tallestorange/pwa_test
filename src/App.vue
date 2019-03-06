<template>
  <v-app>
    <v-toolbar app color="indigo">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light white--text">competitive programming</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-layout justify-center>
      <v-flex xs7>
        <div v-for="article in articles" style="margin: 5px;">
          <v-card>
            
            <v-layout row>
            <v-card-title primary-title>
              <div>
                <div class="headline font-weight-bold">{{article.title}}</div>
                <!-- <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span> -->
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <div style="margin: 5px;">{{article.score}}</div>
            </v-layout>

            <!-- <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions> -->
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
