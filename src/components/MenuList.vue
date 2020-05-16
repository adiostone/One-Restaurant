<template>
  <div class="menuList">
    <div class="menuList__header">
      <div class="menuList__plus">
        <div class="menuList__plus-menu">
          <router-link class="link" to="/menu">+메뉴 추가</router-link>
        </div>
        <div class="menuList__plus-category">
          <router-link class="link" to="/menu/group">+메뉴그룹 추가</router-link>
        </div>
      </div>
    </div>

    <div v-for="category in menuList" class="menuList__main" v-bind:key="category.name">
      <div class="menuList__category">
        <div class="menuList__category-name">
          {{category.name}}
        </div>
        <div class="menuList__category-button">
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>

      <div v-for="menu in category.menus" v-bind:key="menu.name" class="menuList__item">
        <div class="menuList__item-name">
          <router-link :to="`/menu/update/${menu.name}`">{{menu.name}}</router-link>
        </div>
        <div class="menuList__item-bill">
          {{menu.prices[0].price}}원
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  // data() {
  //   return {
  //     menuList:[]
  //   }
  // },
  computed:{
    menuList:{
      get(){
        return this.$store.state.menuList;
      },
      set(value){
        this.$store.commit('updateMenuList', value)
      }
    }
  },
  created(){
    
    this.$store.dispatch('FETCH_MENULIST');
    this.menuList = this.$store.state.menuList;
    
    
  },
};
</script>

<style scoped>
.menuList {
  width: 30%;
  padding-top: 10px;
  background-color: #f4f4f4;
  border: 1px solid #c9c9c9;
}

.menuList__plus {
  display: flex;
  justify-content: space-around;
  color: #ffb21c;
  font-weight: 600;
  font-size: 17px;
  padding: 15px;
}

.menuList__plus-menu {
  margin-right: 20px;
}

.menuList__category {
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid #c9c9c9;
}

.menuList__item {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 16px;
}
.link{
  color: #ffb21c;
  text-decoration:none;
}
</style>
