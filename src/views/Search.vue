<template>
  <v-content >
    <v-layout justify-center>
      <v-flex xs10 sm9 md7 class="mt-3 mb-3">

        <v-combobox
          label="計算量"
          :items="this.$store.getters['getSearchtags'].orders"
          v-model="orders"
          type="button"
        >
        </v-combobox>

        <v-combobox
          label="アルゴリズム"
          :items="this.$store.getters['getSearchtags'].algorithms"
          v-model="algorithms"
          multiple
          clearable
          chips
          type="button"
        >
          <template v-slot:selection="data">
            <v-chip
              :selected="data.selected"
              close
              color="primary"
              text-color="white"
              @input="remove(data.item)"
            >
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>

        <v-btn
          @click="clickSearch"
          round
          block
          color="primary"
        >検索</v-btn>

      </v-flex>
      
    </v-layout>
  </v-content>
</template>
<script>
  export default {
    data () {
      return {
        orders:[],
        algorithms:[]
      }
    },
    methods: {
      remove: function(item) {
        const index = this.algorithms.indexOf(item)
        if (index >= 0) this.algorithms.splice(index, 1)
      },
      clickSearch: function() {
        console.log(this.orders,this.algorithms)
      }
    }
  }
  
</script>