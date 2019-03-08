<template>
  <div>
    <transition :name="sildeName">
      <v-toolbar app :extended="!this.$store.state.ishome">
        <v-toolbar-side-icon v-if="this.$store.state.ishome" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn v-else @click.stop="back" icon>
          <v-icon>arrow_back</v-icon>
        </v-btn>

        <div v-if="this.$store.state.ishome">
          <v-toolbar-title>
            <span class="font-weight-light">競プロ</span>
          </v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <v-btn v-if="this.$store.state.ishome" icon>
          <v-icon>search</v-icon>
        </v-btn>

        
        <template v-if="!this.$store.state.ishome" v-slot:extension>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <span class="font-weight-light">{{articles[$route.params.value].title}}</span>
          </v-toolbar-title>
        </template>
      </v-toolbar>
    </transition>

    <v-navigation-drawer app v-model="drawer" temporary absolute>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-list>
        <template>
          <v-list-tile to="/">
            <v-list-tile-content>
              <v-list-tile-title>競プロ</v-list-tile-title>
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
      sildeName: "slide-down",
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
        this.sildeName = "slide-down"
      }
      else {
        this.$store.commit("isNotAtHome")
        this.sildeName = "slide-up"
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

<style>
.slide-up-enter, .slide-up-leave-active {
  opacity: 0;
  transition-duration:.8s;
  -webkit-transform: translate(0, 56px);
  transform: translate(0, 56px);
}
.slide-down-leave-active, .slide-down-enter {
  opacity: 0;
  transition-duration:.8s;
  -webkit-transform: translate(0, -56px);
  transform: translate(0, -56px);
}
</style>