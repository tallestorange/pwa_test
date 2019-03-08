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
.slide-left-enter-active, .slide-left-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-100vw) translateX(0px);
}

.slide-right-enter-active, .slide-right-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100vw) translateX(0px);
}

</style>