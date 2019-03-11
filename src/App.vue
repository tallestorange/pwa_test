<template>
  <v-app :dark="this.$store.getters['darkColor']">
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
      transitionName: 'slide-left',
      registration: null
    }
  },
  mounted () {
    document.addEventListener('swUpdated', this.showRefreshUI)
  },
  beforeDestroy () {
    document.removeEventListener('swUpdated', this.showRefreshUI)
  },
  methods: {
    showRefreshUI (e) {
      console.log("アップデートがあるようです")
      this.registration = e.detail

      console.log(this.registration)
      this.registration.update()
      this.registration.skipWaiting()
      console.log("アップデート完了")
    },
  },
  watch: {
    '$route': function (to, from) {
      if (to.path == "/") {
        this.$store.commit("isAtHome")
        if ((from.path).match(/posts/)) {
          this.transitionName = 'slide-right'
        }
        else {
          this.transitionName = 'slide-up'
        }
      }
      else {
        this.$store.commit("isNotAtHome")
        if ((to.path).match(/posts/)) {
          this.transitionName = 'slide-left'
        }
        else {
          this.transitionName = 'slide-down'
        }
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

.slide-up-enter-active, .slide-up-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.slide-up-enter, .slide-up-leave-to {
  transform: translateY(100vw) translateY(0px);
}

.slide-down-enter-active, .slide-down-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.slide-down-enter, .slide-down-leave-to {
  transform: translateY(-100vw) translateY(0px);
}

</style>