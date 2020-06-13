<template>
  <div class="order">
    <div class="order__column">
      <h2 class="order__time">
        13:22
      </h2>
    </div>
    <div class="order__column">
      <div class="order__text">
        <span class="order__text1"> [메뉴2개] 20,000원</span>
        <span class="order__badge">결제완료</span>
        <span class="order__badge">요청있음</span>
      </div>

      <div class="order__text">
        <span class="order__text2"
          >페퍼로니피자 1개 / 핫윙 1개 </span
        >
      </div>
      <div class="order__text">
        <span class="order__text1"> 서울시 용산구 신계동</span>
      </div>
      <div class="order__text">
        <span class="order__text2">와우피자</span>
      </div>
    </div>
    <div class="order__column">
      <div class="order__buttons">
        <div class="order__buttons-order">
          <OrderInformation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderInformation from "../components/OrderInformation.vue";
export default {
  name: "receptionComplete",
  components:{
    OrderInformation
  },
};
</script>

<style scoped>
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
}
</style>
