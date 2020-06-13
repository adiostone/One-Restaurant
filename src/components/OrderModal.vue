<template>
  <div class="text-center" data-app >
      <div class="orderModal">
          <div class="orderModal__time">
              {{totalMenu.orderedAt}}
          </div>
          <!-- <div class="orderModal__request">
              <div class="orderModal__title">
                  요청사항
              </div>
              <div class="orderModal__request-content">
                  피자 토핑에 올리브 많이 주세요.
              </div>
          </div> -->
          

          <div class="orderModal__menus">
              <div class="orderModal__title">
                  주문서
              </div>
              <div class="orderModal__menus-various">
                  <div class="orderModal__menus-text-various">
                      단체메뉴(수량)
                  </div>
                  <div v-for="sharedMenu in sharedMenus" v-bind:key="sharedMenu.id" class="orderModal__menu">
                      <div class="orderModal__menu-name">
                          {{sharedMenu.name}} ({{sharedMenu.quantity}})
                      </div>
                      <div class="orderModal__menu-price">
                          {{sharedMenu.menuTotalPrice}}원
                      </div>
                  </div>
              </div>
              <div class="orderModal__menus-single">
                  <div  class="orderModal__menus-text-single">
                      개인메뉴
                  </div>
                  <div v-for="notSharedMenu in notSharedMenus" v-bind:key="notSharedMenu.id" class="orderModal__menu">
                      <div class="orderModal__menu-name">
                          {{notSharedMenu.name}} {{notSharedMenu.quantity}}
                      </div>
                      <div class="orderModal__menu-price">
                          {{notSharedMenu.menuTotalPrice}}원
                      </div>
                  </div>
              </div>

              <div class="orderModal__sum">
                  
                  <div class="orderModal__sum-menu">
                      <div class="orderModal__menu-name">
                          총 포장비
                      </div>
                      <div class="orderModal__menu-price">
                          {{totalMenu.byMenu.totalPackagingCost}}원
                      </div>
                  </div>
                  <div class="orderModal__sum-menu">
                      <div class="orderModal__menu-name">
                          공유 배달비
                      </div>
                      <div class="orderModal__menu-price">
                          {{totalMenu.byMenu.deliveryCost}}원
                      </div>
                  </div>
                  <div class="orderModal__sum-menu">
                      <div class="orderModal__menu-name">
                          비대면 배달비
                      </div>
                      <div class="orderModal__menu-price">
                          {{totalMenu.byMenu.totalNonF2FCost}}원
                      </div>
                  </div>
                  <div class="orderModal__sum-menu">
                      <div class="orderModal__menu-name">
                          총 결제금액
                      </div>
                      <div class="orderModal__menu-price">
                          {{totalMenu.byMenu.totalPrice}}원
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <v-btn text class="printOut"><i class="fas fa-print"></i>주문표 인쇄</v-btn>
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
      totalMenu(){
          return this.$store.getters.orderByID(this.orderID);
      },
      sharedMenus(){
          console.log("total",this.totalMenu.byMenu);
          return this.$store.getters.byMenuShared(this.orderID);
          
      },
      notSharedMenus(){
          console.log("생성",this.sharedMenus);
          return this.$store.getters.byMenuNotShared(this.orderID);
      }
  },

};
</script>

<style scoped>
.orderModal{
    background-color: white;
}
.orderModal__time{
    padding:  20px 20px;
    background-color:#18191D;
    color: white;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
}
.orderModal__title{
    font-size:18px;
    margin-left: 10px;
    margin-bottom: 10px;
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
.text-center >>> .modal{
    height:150px;
    background-color:#0042d1;
    color:white;
    font-weight: 600;
    font-size: 20px;
}
.text-center >>> .printOut{
    background-color:#9CCC65;
    color:white;
    width: 100%;
}
</style>
