<template>
  <div class="menuItem">
    <div class="menuItem__column">
      <div class="menuItem__label">
        메뉴그룹 이름
      </div>
      <div class="menuItem__input">
        <input type="text" v-model="groupName" class="input-text" autofocus />
      </div>
    </div>

    <div class="wrap">
      <button class="button" v-on:click="submit">반영하기</button>
    </div>
  </div>
</template>

<script>
import { createGroup } from "../api/index.js";
export default {
  name: "MenuItem",
  data() {
    return {
      groupName: ""
    };
  },
  methods: {
    submit: function() {
      const temp = { name: this.groupName };
      this.$store.dispatch("CREATE_GROUP",temp);
    }
  }
};
</script>

<style scoped>
.menuItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 70%;
  padding: 30px;
}
.menuItem__column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 70%;
  margin-bottom: 30px;
}

.menuItem__submit {
  background-color: #ffb21c;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 10px;
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.button {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 600;
  opacity: 0.8;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

.menuItem__label {
  font-weight: 600;
  margin-bottom: 20px;
}

input {
  width: 200px;
  height: 40px;
  border: 1px solid #c9c9c9;
  font-size: 20px;
  text-align: center;
}

.input-text {
  transition: width 0.4s ease-in-out;
}

.input-text:focus {
  width: 300px;
}
</style>
