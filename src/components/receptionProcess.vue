<template>
  <div class="orders">
    <div v-for="(order,index) in this.processOrders" v-bind:key="order.id" class="order">
      <div class="order__column" id="orderTime">
        <h2 class="order__time">
          {{`${(new Date(order.orderedAt)).getHours()}시 ${(new Date(order.orderedAt)).getMinutes()}분`}}
        </h2>
      </div>
      <div  class="order__column" id="orderMain">
        <div class="order__text">
          <span class="order__text1">{{`[메뉴${order.byMenu.menus.length}개] ${order.byMenu.totalPrice}원`}}</span>
          <span class="order__badge">{{`단체${groupDeliveryCount(index)}인`}}</span>
          <span class="order__badge">{{`개인${singleDeliveryCount(index)}인`}}</span>
        </div>

        <div class="order__text">
          <span class="order__text2"
            >{{`${order.byMenu.menus[0].name}/${order.byMenu.menus[1].name}등 총${order.byMenu.menus.length}개`}} </span
          >
        </div>
        <div class="order__text">
          <span class="order__text1">{{sampleAddress(index)}}</span>
        </div>
        <div class="order__text">
          <!-- <span class="order__text2">{{this.$store.state.inform.name}}</span> -->
        </div>
      </div>
      <div class="order__column">
        <div class="order__buttons">
          <div class="order__buttons-order">
            <OrderInformation v-bind:orderID="order.id" />
          </div>
          <div class="order__buttons-timeLimit">
            <DeliveryStart v-bind:orderID="order.id" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import DeliveryStart from "../components/DeliveryStart.vue";
import OrderInformation from "../components/OrderInformation.vue";
export default {
  name: "receptionProcess",
  components:{
    DeliveryStart,
    OrderInformation
  },
  computed:{
    processOrders(){
      return this.$store.state.processOrders;
    }
  },
  methods: {
    sampleAddress(index){
      let temp = this.processOrders[index];
      for(let i = 0 ; i<temp.byCustomer.length; i++){
        if(temp.byCustomer[i].isNonF2F===false){
          return temp.byCustomer[i].address;
        }
      }
    },
    groupDeliveryCount(index){
      let temp = this.processOrders[index];
      let count = 0;
      for(let i = 0 ; i<temp.byCustomer.length; i++){
        if(temp.byCustomer[i].isNonF2F===false){
          count = count+1;
        }
      }
      return count;
    },
    singleDeliveryCount(index){
      let temp = this.processOrders[index];
      let count = 0;
      for(let i = 0 ; i<temp.byCustomer.length; i++){
        if(temp.byCustomer[i].isNonF2F===true){
          count = count+1;
        }
      }
      return count;
    },
  },
};
</script>

<style scoped>
.orders{
  width:100%;
  padding-right:20px;
  min-width:900px;
}
.order {
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: space-between;
  padding: 30px 80px;
  padding-right: 20px;
  border-bottom: 1px solid #c9c9c9;
  margin-left: 20px;
  margin-right: 20px;
}
.order__time {
  font-size: 34px;
}
.order__text {
  text-align: start;
  padding: 7px;
}
.order__text1 {
  color: black;
  font-weight: 600;
}
.order__text2 {
  opacity: 0.6;
}
.order__badge {
  margin-left: 5px;
  font-size: 15px;
  padding: 3px;
  border: 0.5px groove grey;
  font-weight: 600;
}
.order__badge:last-child {
  color: red;
}

.order__buttons {
  display: flex;
}
.order__buttons-order {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c9c9c9;
  margin-right: 30px;
  font-weight: 600;
}
.order__buttons-timeLimit {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c9c9c9;
  font-weight: 600;
}
.order__single{
  margin-top:10px;
}.orders{
  width:100%;
  padding-right:20px;
  min-width:900px;
}
.order {
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: space-between;
  padding: 30px 30px;
  padding-right: 20px;
  border-bottom: 1px solid #c9c9c9;
  background-color:#EEEEEE;
}
.order__time {
  font-size: 34px;
}
.order__text {
  text-align: start;
  padding: 7px;
}
.order__text1 {
  color: black;
  font-weight: 600;
}
.order__text2 {
  opacity: 0.6;
}
.order__badge {
  margin-left: 5px;
  font-size: 14px;
  padding: 4px;
  border: 0.5px groove grey;
  border-radius: 5px;
  font-weight: 600;
  color:dodgerblue;
}
.order__badge:last-child {
  color: red;
}

.order__buttons {
  display: flex;
}
.order__buttons-order {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c9c9c9;
  margin-right: 30px;
  font-weight: 600;
}
.order__buttons-timeLimit {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c9c9c9;
  font-weight: 600;
}
.order__single{
  margin-top:10px;
}
#orderTime{
  display:flex;
  justify-content: center;
  align-items: center;
}
#orderMain{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
