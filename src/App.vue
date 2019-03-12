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
      transitionName: 'prev',
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
.next-enter-active, .next-leave-active,
.prev-enter-active, .prev-leave-active  {
  transition: all .6s ease-out;
}

/* prev -> right */

.next-enter {
  transform: translateX(100%);
}
.next-enter-to {
  transform: translateX(0);
}
.next-leave {
  transform: translateX(0);
}
.next-leave-to {
  transform: translateX(-100%);
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