<template>
  <div class="headers">
    <header class="header">
      
      <v-tabs
      background-color="indigo"
      dark
      grow
      >
        <v-tab>
          <router-link class="link" to="/order"><v-badge
            :content="alarm"
            :value="alarm"
            color="error"
          >주문접수</v-badge></router-link>
        </v-tab>
        <v-tab>
          <router-link class="link" to="/home">매장관리</router-link>
        </v-tab>
        <v-tab>
          <router-link class="link" to="/menu">메뉴관리</router-link>
        </v-tab>
      </v-tabs>
    </header>
    <v-alert
        :value="alert"
        color="pink"
        dark
        border="top"
        icon="mdi-home"
        transition="scale-transition"
      >
        새로운 주문이 들어왔습니다!! 주문접수 창에서 확인해주세요
        <v-btn
          color="primary"
          @click="toggleAlert"
        >확인</v-btn>
      </v-alert>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  computed: {
    alarm(){
      return this.$store.state.waitOrders.length;
    },
    alert(){
      return this.$store.state.alert;
    }
  },
  created() {
    this.initWS();
  },
  methods: {
    toggleAlert(){
      this.$store.state.alert = false;
    }
  },
  

};
</script>

<style scoped>
.headers{
  width: 100%;
}
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
  display: flex;
  width:100%;
  height:100%;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
}
.router-link-active{
  color:#ffb21c
}
.v-tab{
  display: flex;
}
.header >>> .v-badge__badge{
  background-color:#ff5252;
  border-radius:10px;
}
</style>