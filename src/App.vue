<template>
  <v-app dark>
    <tool-bar></tool-bar>
    <transition :name="transitionName">
      <router-view/>
    </transition>
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
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.path == "/") {
        this.$store.commit("isAtHome")
        this.transitionName = 'slide-right'
      }
      else {
        this.$store.commit("isNotAtHome")
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>

<style>
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-50px, 0);
}
</style>