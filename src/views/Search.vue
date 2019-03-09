<template>
  <v-content >
    <v-layout justify-center>
      <v-flex xs10 sm9 md7>

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
              @input="remove(data.item)"
            >
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>


      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
  export default {
    data () {
      return {
        algorithms:[]
      }
    },
    methods: {
      remove: function(item) {
        const index = this.algorithms.indexOf(item)
        if (index >= 0) this.algorithms.splice(index, 1)
      }
    }
  }
  
</script>