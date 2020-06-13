<template>
  <div id="app">
    <!-- <div class="nav">
      <div class="nav__column">
        <h2 class="nav__name">
          1인식당
        </h2>
      </div>
      <div class="nav__column">
        <div class="nav__icon"><i class="fas fa-window-minimize"></i></div>
        <div class="nav__icon"><i class="fas fa-window-maximize"></i></div>
        <div class="nav__icon"><i class="fas fa-times"></i></div>
      </div>
    </div> -->
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="this.$store.state.header" />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  data: () => ({
    ok: true,
  }),
  
  components: {
    HelloWorld
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  border: 1px solid #c9c9c9;
}
.nav {
  display: flex;
  justify-content: space-between;
  background-color: #363636;
  border-bottom: 1px solid black;
}
.nav__name {
  color: #ffb21c;
  font-size: 30px;
  font-weight: 600;
  padding: 10px 20px;
}
.nav__column:last-child {
  display: flex;
}
.nav__icon {
  font-size: 20px;
  color: white;
  padding: 10px;
  border: 1px solid black;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
a {
  display: inline-block;
  transition: .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
}
a:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>