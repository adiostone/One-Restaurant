<template>
  <nav class="orderList">
    <div class="orderList__List">
      <router-link to="/order">
        <div id="last" class="orderList__column">
          <h5 class="orderList__text1">접수대기</h5>
          <h5 class="orderList__text2">1</h5>
        </div>
      </router-link>

      <router-link to="/order">
        <div class="orderList__column">
          <h5 class="orderList__text1">처리중</h5>
          <h5 class="orderList__text2">0</h5>
        </div>
      </router-link>

      <router-link to="/order">
        <div class="orderList__column">
          <h5 class="orderList__text1">완료</h5>
          <h5 class="orderList__text2">0</h5>
        </div>
      </router-link>

      <router-link to="/order">
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

<style>
.orderList__List {
  width: 100px;
  display: flex;
  flex-flow: column;
}
.orderList__column {
  padding: 60px 15px;
  color: black;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  background-color: #dddddd;
  border: 1px solid #c9c9c9;
}
#last {
  background-color: white;
}
#last .orderList__text1 {
  color: black;
}
#last .orderList__text2 {
  color: black;
}
.orderList__text1 {
  margin-bottom: 10px;
  text-decoration: none;
  color: #a4a6ad;
}
.orderList__text2 {
  color: #a4a6ad;
  font-size: 18px;
}
</style>
