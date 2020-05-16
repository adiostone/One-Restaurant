<template>
  <div class="Menu">
    <MenuList />
    <MenuGroupPlus />
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue";
import MenuGroupPlus from "@/components/MenuGroupPlus.vue";

export default {
  name: "MenuGroup",
  components: {
    MenuList,
    MenuGroupPlus
  },
  created(){
    // this.$store.dispatch('FETCH_MENULIST');
  }
};
</script>

<style scoped>
.Menu {
  display: flex;
}
</style>