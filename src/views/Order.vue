<template>
  <div class="order">
      <OrderList />
      <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import OrderList from "@/components/OrderList.vue";
import receptionWait from "@/components/receptionWait.vue";
import receptionProcess from "@/components/receptionProcess.vue";
import receptionLookup from "@/components/receptionLookup.vue";
import receptionComplete from "@/components/receptionComplete.vue";
export default {
  name: "order",
  components: {
    OrderList,
    receptionWait ,
    receptionProcess,
    receptionLookup,
    receptionComplete
  }
};
</script>

<style scoped>
.order {
  display: flex;
}
</style>
