<template>
  <v-content>
    <v-layout justify-center>
      <v-flex xs11 sm9 md7>
        <v-expansion-panel>

          <v-expansion-panel-content>
            <div slot="header">アルゴリズム</div>
            <v-card>
              <v-layout row>
                <div v-for="tag in article.algorithms">
                  <v-chip color="primary">{{tag}}</v-chip>
                </div>
              </v-layout>
            </v-card>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <div slot="header">計算量</div>
            <v-card>
              <v-layout row>
                <v-chip color="primary">{{article.order}}</v-chip>
              </v-layout>
            </v-card>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <div slot="header">解説</div>
            <v-card>
              <div v-html="this.$store.getters.getArticle()"></div>
            </v-card>
          </v-expansion-panel-content>

          <div>
            <v-btn @click="clickLink" round color="primary">問題を見る</v-btn>
          </div>

        </v-expansion-panel>
        

      </v-flex>
    </v-layout>

  </v-content>
</template>

<script>

  export default {
    components: {
    },
    computed: {
      article() {
        const content = this.$store.state.articles[this.$route.params.value]
        return content
      }
    },
    created: function() {
      const content = this.$store.state.articles[this.$route.params.value]
      this.$store.dispatch('getArticleAction',{name: process.env.BASE_URL + "json/" + content.filename + '.json'})
    },
    methods: {
      clickLink: function() {
        const content = this.$store.state.articles[this.$route.params.value]
        window.open(content.url)
      }
    },
    data () {
      return {
      }
    }
  }
</script>