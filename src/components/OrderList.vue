<template>
  <nav class="orderList">
    <div class="orderList__List">
      <router-link class= "order-link" to="/order">
        <div class="orderList__column">
          <h5 class="orderList__text1">접수대기</h5>
          <h5 class="orderList__text2">{{this.$store.state.waitOrders.length}}</h5>
        </div>
      </router-link>

      <router-link class= "order-link" to="/order/process">
        <div class="orderList__column">
          <h5 class="orderList__text1">처리중</h5>
          <h5 class="orderList__text2">{{this.$store.state.processOrders.length}}</h5>
        </div>
      </router-link>

      <router-link class= "order-link" to="/order/complete">
        <div class="orderList__column">
          <h5 class="orderList__text1">완료</h5>
          <h5 class="orderList__text2">{{this.$store.state.completeOrders.length}}</h5>
        </div>
      </router-link>

      <router-link class= "order-link" to="/order/lookup">
        <div class="orderList__column">
          <h5 class="orderList__text1">주문조회</h5>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "OrderList"
};
</script>

<style scoped>
.orderList__List {
  width: 100px;
  display: flex;
  flex-flow: column;
}
.orderList__column {
  padding: 60px 15px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: 1px solid #c9c9c9;
}
a{
  text-decoration: none;
}
.order-link{
  color: #a4a6ad;
}
.orderList__text1 {
  margin-bottom: 10px;
}
.orderList__text2 {
  font-size: 18px;
}
.router-link-exact-active{
  color:#ffb21c;
  background-color: white;
}
</style>
