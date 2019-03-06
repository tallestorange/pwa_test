<template>
  <v-app dark>
    <tool-bar></tool-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    ToolBar
  },
  data () {
    return {
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.path == "/") {
        this.$store.commit("isAtHome")
      }
      else {
        this.$store.commit("isNotAtHome")
        console.log(this.$router.meta)
      }
    }
  }
}
</script>
