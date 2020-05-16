<template>
  <div class="login">

    <div class="login__logo">1인식당</div>
    <div class="login__google">
      <img src="../../public/btn_google_signin_light_focus_web.png" v-on:click="login" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {

  name: "Login",
  data: () => ({
    uid: "",
    password: ""
  }),
  methods: {
    ...mapMutations([
      "SET_accessToken",
      "SET_refreshToken",
    ]),
    login() {
      
      const electron = require('electron');
      const BrowserWindow = electron.remote.BrowserWindow;
      var authWindow = new BrowserWindow({
        width: 800, 
        height: 600, 
        show: false, 
        'node-integration': false,
        'web-security': false
      });
      var authUrl = 'https://api.onetable.xyz/v1/restaurant/auth/signin'
      authWindow.loadURL(authUrl, {userAgent: 'Chrome'});
      authWindow.show();
      // router.go("/home")
      authWindow.webContents.on('did-navigate', async  () =>{
        const token = await authWindow.webContents
          .executeJavaScript(`document.querySelector('pre').innerText`, true)
          .then(result => {
            // console.log(result); // Will be the JSON object from the fetch call
            authWindow.close();
            return result;
          })
          .catch(() => {
            return null;
          });
        if (token !== null) {
          const parsed = JSON.parse(token);
          const tokenList = {access: parsed.access, refresh:parsed.refresh}
          this.$store.commit('SET_token',tokenList);
          this.$router.push('/home');
          console.log(this.$store.state.token.access);
          console.log(this.$store.state.header);
          
        }
        // More complex code to handle tokens goes here
      });

      authWindow.webContents.on('will-navigate', async ()=> {
        const token = await authWindow.webContents
          .executeJavaScript(`document.querySelector('pre').innerText`, true)
          .then(result => {
            authWindow.close();
            return result;
          })
          .catch(() => {
            return null;
          });
        if (token !== null) {
          const parsed = JSON.parse(token);
          const tokenList = {access: parsed.access, refresh:parsed.refresh}
          this.$store.commit('SET_token',tokenList);
          this.$router.push('/home');
          console.log(this.$store.state.header);
          this.$store.commit('SET_header');
        }
        // More complex code to handle tokens goes here
      });

      authWindow.on('closed', function() {
        authWindow = null;
      });
    },
  }
}
</script>

<style>
.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__logo {
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
}
.login__google{
  padding-bottom: 100px;
}
.login__google:hover {
  cursor: pointer;
  
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
