<template>
  <div class="Menu">
    <MenuUpdate />
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue";
import MenuUpdate from "@/components/MenuUpdate.vue";

export default {
  name: "MenuUpdate",
  components: {
    MenuList,
    MenuUpdate
  },
  created(){
    console.log(this.$route.params.categoryID);
  }
};
</script>

<style scoped>
.Menu {
  display: flex;
}
</style>
