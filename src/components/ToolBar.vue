<template>
  <div>
    <v-toolbar app :extended="!this.$store.state.ishome">
      <v-toolbar-side-icon v-if="this.$store.state.ishome" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn v-else @click.stop="back" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <div v-if="this.$store.state.ishome">
        <v-toolbar-title>
          <span class="font-weight-light">Competitive Programming</span>
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <template v-if="!this.$store.state.ishome" v-slot:extension>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <span class="font-weight-light">{{articles[$route.params.value].title}}</span>
        </v-toolbar-title>
      </template>


    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-list>
        <template>
          <v-list-tile to="/">
            <v-list-tile-content>
              <v-list-tile-title>競技プログラミング</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      drawer: false
    }
  },
  computed: {
      articles() {
        return this.$store.state.articles
      }
    },
  watch: {
    '$route': function (to, from) {
      if (to.path == "/") {
        this.$store.commit("isAtHome")
      }
      else {
        this.$store.commit("isNotAtHome")
      }

    }
  },
  methods: {
    back: function() {
      this.$router.go(-1)
    }
  }
}
</script>