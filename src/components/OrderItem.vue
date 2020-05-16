<template>
  <div class="order">
    <div class="order__column">
      <h2 class="order__time">
        13:22
      </h2>
    </div>
    <div class="order__column">
      <div class="order__text">
        <span class="order__text1"> [메뉴4개] 31,800원</span>
        <span class="order__badge">결제완료</span>
        <span class="order__badge">요청있음</span>
      </div>

      <div class="order__text">
        <span class="order__text2"
          >김치찌개 1개 / 된장찌개 2개 / 김치볶음밥 1개</span
        >
      </div>
      <div class="order__text">
        <span class="order__text1"> 서울 동작구 흑석동</span>
      </div>
      <div class="order__text">
        <span class="order__text2">1인식당 흑석점</span>
      </div>
    </div>
    <div class="order__column">
      <div class="order__buttons">
        <div class="order__buttons-order">
          <span class="text">접수하기</span>
        </div>
        <div class="order__buttons-timeLimit">
          39분
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItem"
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
  width: 100px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c9c9c9;
  margin-right: 30px;
  font-weight: 600;
}
.order__buttons-timeLimit {
  width: 100px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c9c9c9;
  font-weight: 600;
}
</style>
