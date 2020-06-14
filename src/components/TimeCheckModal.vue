<template>
  <div class="text-center" data-app >
    <v-dialog v-model="dialog" width="700" >
      <template v-slot:activator="{ on }">
        <v-btn text large color="primary" v-on="on" class="modal" >주문접수/취소 <i class="fas fa-user-check"></i></v-btn>
      </template>
      <div class="timeCheckModal">
        <div class="tiemCheckModal__header">
            주문접수/취소
        </div>
        <div class="timeCheckModal__option">
          <v-checkbox :disabled="enabled" v-model="timeCheck" label="30분" value=30 class="selectButton" ></v-checkbox>
          <v-checkbox :disabled="enabled" v-model="timeCheck" label="40분" value=40 class="selectButton" ></v-checkbox>
          <v-checkbox :disabled="enabled" v-model="timeCheck" label="50분" value=50 class="selectButton" ></v-checkbox>
          <v-checkbox :disabled="enabled" v-model="timeCheck" label="60분" value=60 class="selectButton" ></v-checkbox>
          <v-checkbox :disabled="enabled" v-model="timeCheck" label="90분" value=90 class="selectButton" ></v-checkbox>
          <v-checkbox v-model="enabled" label="직접입력" value="120" class="selectButton" ></v-checkbox>
          <v-textarea
          :disabled="!enabled"
          label="시간 직접입력하기"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          v-model="timeCheck"
        ></v-textarea>
        
        </div>
        <div class="timeCheckModal__footer">
          <v-btn text @click="reject" class="cancelButton">주문거절</v-btn>
          <v-btn text @click="recognize" class="allowButton">주문승인</v-btn>
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
      this.$store.dispatch('refuseOrder',this.orderID);
      this.dialog=false;
    },
    recognize:function(){
      const times = parseInt(this.timeCheck);
      console.log(typeof(times));
      console.log(times);
      const payload = {id:this.orderID, estimatedTime:times};
      this.$store.dispatch('acceptOrder',payload);
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
    background-color:#0042d1;
    color:white;
    font-weight: 600;
    font-size: 18px;
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
  font-weight:600;
  width:50%;
}
</style>
