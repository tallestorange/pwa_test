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
      this.registration = e.detail

      console.log(this.registration)
      
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
  transition: opacity 300ms ease-out;
}

.slide-left-enter, .slide-left-leave-to {
  opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: opacity 300ms ease-out;
}

.slide-right-enter, .slide-right-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: opacity 300ms ease-out;
}

.slide-up-enter, .slide-up-leave-to {
  opacity: 0;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity 300ms ease-out;
}

.slide-down-enter, .slide-down-leave-to {
  opacity: 0;
}

</style>