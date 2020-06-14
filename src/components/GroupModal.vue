<template>
<div class="groupContainer">
    <div class="groupHeader">
        <div class="groupAddress">주소지: <span class="groupAddress-title">{{groupCustomer[0].address}}</span></div>
    </div>
  <div class="text-center" data-app >

      <div class="testDiv">
      <div v-for="(customer, index) in groupCustomer" v-bind:key="customer.phoneNumber" class="orderModal">
          <div class="orderModal__time">
              단체배달고객 {{index+1}}
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
                          공유 배달비
                      </div>
                      <div class="orderModal__menu-price">
                          {{customer.deliveryCostPerCapita}}원
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
              <v-btn text class="printOut"><i class="fas fa-print"></i>주문표 인쇄</v-btn>
          </div>
      </div>
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
      groupCustomer(){
          return this.$store.getters.groupCustomer(this.orderID);
      },

  },
  methods: {
        groupMenus(index){
          let result = [];
            for(let i = 0 ; i<this.groupCustomer[index].menus.length;i++){
                if(this.groupCustomer[index].menus[i].isShared === true){
                    result.push(this.groupCustomer[index].menus[i]);
                }
            }
          return result;
      },
      singleMenus(index){
          let result = [];
          for(let i = 0 ; i<this.groupCustomer[index].menus.length;i++){
            if(this.groupCustomer[index].menus[i].isShared === false){
                result.push(this.groupCustomer[index].menus[i]);
            }
          }
          return result;
      }
  },

};
</script>

<style scoped>
.groupContainer{
    width:100%;
}
.groupHeader{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    background-color:#546E7A;
    color:white;
    font-weight: 600;
    padding: 15px 0px;
    margin-bottom:10px;
}
.text-center{
    width:100%;
    /* display:flex;
    justify-content: space-betw; */
}
.testDiv{
    display:flex;
    justify-content: space-around;
}
.modal{
    background-color:#FF6060;
    color: white;
    border-radius:10px;
}
.orderModal{
    background-color: white;
    
}
.orderModal__time{
    padding:  20px 20px;
    background-color:#FF6060;
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
    padding-left:10px;
}
.orderModal__address{
    display:flex;
    padding-left:10px;
    margin-bottom:0px;
}
.orderModal__information-text1{
    margin: 0px 10px;
    font-size: 15px;
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
    padding: 5px 20px 10px 0px;
    
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
.groupContainer >>> .printOut{
    background-color:#9CCC65;
    color:white;
    width:100%;
}
.price__badge{
    margin-left: 5px;
    font-size: 7px;
    padding: 3px;
    border: 0.5px groove grey;
    font-weight: 600;
    color:dodgerblue;
    border-radius: 5px;
    margin-right:3px;
    vertical-align: middle;
}
.orderModal__menus-single{
    margin-bottom:20px;
}
</style>
