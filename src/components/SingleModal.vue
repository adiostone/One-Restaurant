<template>
<div class="testDiv">
  <div class="text-center" data-app >
      <div v-for="(customer, index) in singleCustomer" v-bind:key="customer.phoneNumber" class="orderModal">
          <div class="orderModal__time">
              개인배달지{{index+1}}
          </div>
          <div class="orderModal__request">
              <div class="orderModal__title">
                  요청사항
              </div>
              <div class="orderModal__request-content">
                  {{customer.request}}
              </div>
          </div>
          
          <div class="orderModal__information">
              <div class="orderModal__title">
                  주문정보
              </div>
              <div class="orderModal__address">
                  <div class="orderModal__information-text1">
                      주소
                  </div>
                  <div class="orderModal__information-text2">
                      {{customer.address}}
                  </div>
              </div>
              <div class="orderModal__address">
                  <div class="orderModal__information-text1">
                      번호
                  </div>
                  <div class="orderModal__information-text2">
                      {{customer.phoneNumber}}
                  </div>
              </div>
          </div>

          <div class="orderModal__menus">
              <div class="orderModal__title">
                  주문서
              </div>
              <div class="orderModal__menus-various">
                  <div class="orderModal__menus-text-various">
                      단체메뉴(수량)
                  </div>
                  <div v-for="groupMenu in groupMenus(index)" v-bind:key="groupMenu.id" class="orderModal__menu">
                      <div class="orderModal__menu-name">
                          {{groupMenu.name}}({{groupMenu.quantity}}) 
                      </div>
                      <div class="orderModal__menu-price">
                          <span class="price__badge">+포장비{{groupMenu.packagingCost}}원</span>{{groupMenu.pricePerCapita}}원
                      </div>
                  </div>
              </div>
              <div class="orderModal__menus-single">
                  <div class="orderModal__menus-text-single">
                      개인메뉴(수량)
                  </div>
                  <div v-for="singleMenu in singleMenus(index)" v-bind:key="singleMenu.id" class="orderModal__menu">
                      <div class="orderModal__menu-name">
                          {{singleMenu.name}}({{singleMenu.pricePerCapita}})
                      </div>
                      <div class="orderModal__menu-price">
                          {{singleMenu.pricePerCapita}}원
                      </div>
                  </div>
              </div>

              <div class="orderModal__sum">
                  
                  <div class="orderModal__sum-menu">
                      <div class="orderModal__menu-name">
                          공유배달비
                      </div>
                      <div class="orderModal__menu-price">
                          {{customer.deliveryCostPerCapita}}원
                      </div>
                  </div>
                  <div class="orderModal__sum-menu">
                      <div class="orderModal__menu-name">
                          비대면 배달비
                      </div>
                      <div class="orderModal__menu-price">
                          {{customer.nonF2FCost}}원
                      </div>
                  </div>
                  <div class="orderModal__sum-menu">
                      <div class="orderModal__menu-name">
                          총 결제금액
                      </div>
                      <div class="orderModal__menu-price">
                          {{customer.totalPrice}}원
                      </div>
                  </div>
              </div>
          </div>
        <v-btn text class="printOut"><i class="fas fa-print"></i>주문표 인쇄</v-btn>
      </div>
    
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  props:['orderID'],
  data() {
    return {
      dialog: false
    };
  },
  computed: {
      singleCustomer(){
          return this.$store.getters.singleCustomer(this.orderID);
      },
  },
  methods: {
        groupMenus(index){
          let result = [];
            for(let i = 0 ; i<this.singleCustomer[index].menus.length;i++){
                if(this.singleCustomer[index].menus[i].isShared === true){
                    result.push(this.singleCustomer[index].menus[i]);
                }
            }
          return result;
      },
      singleMenus(index){
          let result = [];
          for(let i = 0 ; i<this.singleCustomer[index].menus.length;i++){
            if(this.singleCustomer[index].menus[i].isShared === false){
                result.push(this.singleCustomer[index].menus[i]);
            }
          }
          return result;
      }
  },

};
</script>

<style scoped>
.testDiv{
    display:flex;
    justify-content: space-around;
}
.modal{
    background-color:dodgerblue;
    color: white;
    border-radius:10px;
}
.orderModal{
    background-color: white;
}
.orderModal__time{
    padding:  20px 20px;
    background-color:dodgerblue;
    color: white;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
}
.orderModal__title{
    font-size:18px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.orderModal__request-content{
    margin: 0px 10px;
    font-size:15px;
    font-weight: 500;
}
.orderModal__address{
    display:flex;
    margin-bottom:10px;
}
.orderModal__information-text1{
    margin: 0px 10px;
    font-size: 16px;
    opacity:0.5;
    padding-right:10px;
    
}
.orderModal__menus-text-various{
    color:dodgerblue;
}
.orderModal__menus-text-single{
    color:lightcoral;
}
.orderModal__menus{
    padding: 5px 20px 10px 20px;
}
.orderModal__menu{
    display:flex;
    justify-content: space-between;
    padding: 10px 5px;
}
.orderModal__sum{
 margin-top: 10px;
}
.orderModal__sum-menu{
    display:flex;
    justify-content: space-between;
    margin-bottom:5px;
}
.text-center >>> .printOut{
    background-color:#9CCC65;
    color:white;
    width:100%;
}
.orderModal__menus-single{
    margin-bottom:20px;
}
</style>
