<template>
  <v-card
    width="300"
    class="mx-auto"
  >
    
    <v-toolbar
      color="teal"
      dark
    >
      
      <v-toolbar-title>메뉴관리</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ma-2" color="purple" dark @click="toggleOk">
        상세편집<v-icon dark>mdi-wrench</v-icon>
      </v-btn>

    </v-toolbar>

    <v-toolbar
      color="teal"
      dark
    >
      <v-toolbar-title>
        <router-link class="link" to="/menu">
          <v-btn class="ma-2" color="purple" dark>
            <v-icon dark>mdi-plus</v-icon>메뉴추가
          </v-btn>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link class="link" to="/menu/group">
          <v-btn class="ma-2" color="purple" dark>
            <v-icon dark>mdi-plus</v-icon>그룹추가
          </v-btn>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>

    <v-list :expand=true>
      <v-list-group
        v-for="category in menuList"
        :key="category.name"
        no-action
        
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="category.name+'('+category.menus.length+')'"></v-list-item-title>

          </v-list-item-content>
          <v-list-item-action v-if="category.menus.length==0&&ok" >
            <v-btn icon @click="categoryDel(category.id)" >
              <v-icon  >mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
          
          
        </template>

        
        <v-list-item
          v-for="menu in category.menus"
          :key="menu.name"
        >
          <v-list-item-avatar v-if="menu.image" >
            <v-img :src="menu.image"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <router-link :to="`/menu/update/${menu.id}/${category.id}`">
            <v-list-item-title v-text="menu.name" id="name"></v-list-item-title>
            </router-link>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="menu.prices[0].price+'원'" id="price"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action v-if="ok" >
            <v-btn icon @click="menuDel(category.id,menu.id)" >
              <v-icon  >mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

      
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MenuList",
  data() {
    return {
      ok:false
    }
  },
  computed: {
    ...mapGetters(["menuList"])
  },
  created() {
    this.$store.dispatch("FETCH_MENULIST");
  },
  methods: {
    menuDel:function(menuID,categoryID){
      let payload = {menuID:menuID, categoryID: categoryID};
      this.$store.dispatch("DELETE_MENU",payload);
    },
    categoryDel:function(categoryID){
      this.$store.dispatch("DELETE_CATEGORY",categoryID);
    },
    toggleOk:function(){
      this.ok = !this.ok;
    }
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
.link {
  color: #ffb21c;
  text-decoration: none;
}
#price{
  text-align:end;
}
#name{
  text-align:center;
  
}
a{
  text-decoration: none;
}
.grey--text text--lighten-1{
  color:grey;
  font-size:20px;
}
.v-list-item__action{
  margin-top:0;
  margin-bottom:0;
}
</style>
