<template>
  <div class="text-center" data-app >
    <v-dialog v-model="dialog" width="700" >
      <template v-slot:activator="{ on }">
        <v-btn text large color="primary" v-on="on" class="modal" >음식완료/배달출발</v-btn>
      </template>
      <div class="timeCheckModal">
        <div class="tiemCheckModal__header">
            음식완료/배달출발
        </div>
        <div class="timeCheckModal__option">
            배달 출발 알림을 보내시겠습니까?
        </div>
        <div class="timeCheckModal__footer">
          <v-btn text @click="reject" class="allowButton">배달시작</v-btn>
        </div>
      </div>

    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props:['orderID'],
  data() {
    return {
      dialog: false,
      enabled: false,
      timeCheck:0,
    };
  },
  methods: {
    reject:function(){

      this.dialog=false;
    },
    recognize:function(){
      this.$store.dispatch('startDelivery',this.orderID);
      this.dialog=false;
    }
  },
};
</script>

<style scoped>
.timeCheckModal{
    background-color: white;
}
.text-center >>> .modal{
    height:150px;
    background-color:#2ada6d;
    color:white;
    font-weight: 600;
    font-size: 20px;
}
.tiemCheckModal__header{
    padding:  20px 20px;
    background-color:#18191D;
    color: white;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
}
.timeCheckModal__option{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 30px;
  padding-bottom:20px;
}
.selectButton{
  width:33%;
}
.cancelButton{
  color:white;
  width:50%;
  background-color:#EF5350;
  font-weight:600;
}
.allowButton{
  color:white;
  background-color:#1976D2;
  font-weight:400;
  width:100%;
}
</style>
