<template>
  
  <v-app :dark="this.$store.getters['darkColor']">
    <tool-bar></tool-bar>
    
      <transition :name="transitionName">
      <router-view></router-view>
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
      transitionName: 'next',
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
          this.transitionName = 'next'
        }
        // else {
        //   this.transitionName = 'slide-up'
        // }
      }
      else {
        this.$store.commit("isNotAtHome")
        if ((to.path).match(/posts/)) {
          this.transitionName = 'prev'
        }
        // else {
        //   this.transitionName = 'slide-down'
        // }
      }
    }
  }
}
</script>

<style>
.slide-left-enter-active, .slide-left-leave-active {
  transition: opacity 300ms ease-out;
  top: 0px;
}

.slide-left-enter, .slide-left-leave-to {
  opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: opacity 300ms ease-out;
  top: 0px;
}

.slide-right-enter, .slide-right-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: opacity 300ms ease-out;
  top: 0px;
}

.slide-up-enter, .slide-up-leave-to {
  opacity: 0;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity 300ms ease-out;
  top: 0px;
}

.slide-down-enter, .slide-down-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  top: 0px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.next-enter-active, .next-leave-active,
.prev-enter-active, .prev-leave-active  {
  transition: all .9s ease-out;
}

.next-enter {
  transform: translateX(100%);
}
.next-enter-to {
  transform: translateX(0);
}
.next-leave {
  transform: translateX(0);
  /* opacity: 1 */
}
.next-leave-to {
  transform: translateX(-100%);
  /* opacity: 0 */
}


.prev-enter {
  transform: translateX(-100%);
}
.prev-enter-to {
  transform: translateX(0);
}
.prev-leave {
  transform: translateX(0);
}
.prev-leave-to {
  transform: translateX(100%);
}


</style>