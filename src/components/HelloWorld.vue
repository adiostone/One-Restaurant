<template>
  <header class="header">
    <div class="header__column">
      <router-link class="link" to="/order">주문접수</router-link>
    </div>
    <div class="header__column">
      <router-link class="link" to="/home">매장관리</router-link>
    </div>
    <div class="header__column">
      <router-link class="link" to="/menu">메뉴관리</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  background-color: #363636;
}
.header__column {
  padding: 20px 75px;
  font-size: 20px;
  color: white;
  font-weight: 600;
  border-bottom: 1px solid black;
  transition: background-color 0.5s;
}
.header__column:last-child {
  margin-left: auto;
}
.header__column:hover {
  background-color: #ffb21c;
}
.link {
  color: white;
}
</style>
