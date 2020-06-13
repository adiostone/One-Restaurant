<template>
  <div class="text-center" data-app >
    <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on }">
        <v-btn  class = "address__button" color="red lighten-2" dark v-on="on">
          설정하기
        </v-btn>
      </template>
        <v-date-picker full-width width="410" v-model="picker" ></v-date-picker>

    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      dialog: false
    };
  },

};
</script>

<style scoped>

</style>
