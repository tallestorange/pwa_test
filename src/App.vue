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
      console.log(from.path,to.path)
      if (to.path == "/") {
        this.$store.commit("isAtHome")
        
        if ((from.path).match(/posts/)) {
          this.transitionName = 'prev'
        }
        else {
          this.transitionName = 'up'
        }
      }
      else {
        this.$store.commit("isNotAtHome")
        
        if ((to.path).match(/posts/) || (to.path).match(/search/)) {
          this.transitionName = 'next'
        }
        else {
          this.transitionName = 'down'
        }
      }
    }
  }
}
</script>

<style>
.next-enter-active, .next-leave-active,
.prev-enter-active, .prev-leave-active,
.up-enter-active, .up-leave-active,
.down-enter-active, .down-leave-active  {
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



.up-enter {
  transform: translateY(100%);
}
.up-enter-to {
  transform: translateY(0);
}
.up-leave {
  transform: translateY(0);
}
.up-leave-to {
  transform: translateY(-100%);
}

.down-enter {
  transform: translateY(-100%);
}
.down-enter-to {
  transform: translateY(0);
}
.down-leave {
  transform: translateY(0);
}
.down-leave-to {
  transform: translateY(100%);
}


</style>