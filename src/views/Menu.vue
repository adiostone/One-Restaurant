<template>
  <div class="Menu">
    <MenuList />
    <!-- <MenuItem /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue";
import MenuItem from "@/components/MenuItem.vue";

export default {
  name: "Menu",
  components: {
    MenuList,
  },
  created() {
    // this.$store.dispatch('FETCH_MENULIST');
  }
};
</script>

<style scoped>
.Menu {
  display: flex;
}
</style>
