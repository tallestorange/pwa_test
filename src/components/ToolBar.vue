<template>
  <div>
    <v-toolbar app>
      <v-toolbar-side-icon v-if="this.$store.state.ishome" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn v-else @click.stop="back" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">きょうぷろ!</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-list>
        <template>
          <v-list-tile  key="0" to="/">
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
  data () {
    return {
      drawer: false
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