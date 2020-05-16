<template>
  <div class="order">
    <div class="container">
      <OrderList />
      <OrderItem />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import OrderList from "@/components/OrderList.vue";
import OrderItem from "@/components/OrderItem.vue";

export default {
  name: "order",
  components: {
    OrderList,
    OrderItem
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
