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

        <v-btn v-if="this.$store.state.ishome" icon @click="clickSearch">
          <v-icon>search</v-icon>
        </v-btn>

        <template v-if="!this.$store.state.ishome" v-slot:extension>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <span v-if="($route.path).match(/posts/)" class="font-weight-light">{{articles[$route.params.value].title}}</span>
            <span v-else-if="$route.path=='/search'" class="font-weight-light">問題検索</span>
            <span v-else class="font-weight-light">検索結果</span>
          </v-toolbar-title>
        </template>

      </v-toolbar>
    </transition>

    <v-navigation-drawer v-model="drawer" app temporary absolute>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-list>
        <v-list-tile to="/">
          <v-list-tile-content>
            <v-list-tile-title>ホーム</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile @click="clickLink('https://atcoder.jp/?lang=ja')">
          <v-list-tile-content>
            <v-list-tile-title>AtCoder</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="clickLink('https://kenkoooo.com/atcoder/')">
          <v-list-tile-content>
            <v-list-tile-title>AtCoder Problems</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>夜間モード</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch v-model="nightMode">
            </v-switch>
          </v-list-tile-action>
        </v-list-tile>

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
      sildeName: "down",
      drawer: false,
      nightMode: this.$store.getters['darkColor']
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
        this.sildeName = "down"
      }
      else {
        this.$store.commit("isNotAtHome")
        this.sildeName = "up"
      }
    },
    'nightMode': function(to, from) {
      this.$store.commit("changeTheme")
    }
  },
  methods: {
    back: function() {
      this.$router.go(-1)
    },
    clickSearch: function() {
      this.$router.push({ path: `/search` })
    },
    clickLink: function(url) {
      window.open(url)
    }
  }
}
</script>

<style>
.up-enter-active, .up-leave-active {
  transition: transform 300ms ease-out;
}
.up-enter, .up-leave-to {
  transform: translateY(56vh) translateY(0);
}
.down-enter-active, .down-leave-active {
  transform: translate(0px, 0px);
  transition: transform 300ms ease-out;
}
.down-enter, .down-leave-to {
  transform: translateY(-56vh) translateY(0);
}
</style>