<template>
  <v-card @click="clickProblem(article.filename)">
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
</template>

<script>
  export default {
    data: () => ({
    }),
    props: ['article'],
    methods: {
      clickProblem: function(name) {
        this.$router.push({ path: `/posts/${name}` })
      }
    }
  }
</script>

<style>
</style>