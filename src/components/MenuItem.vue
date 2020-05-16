<template>
  <div class="menuItem">
    <div class="menuItem__column">
      <div class="menuItem__label">
        메뉴그룹
      </div>
      <div class="menuItem__input">
        <select  v-model="categoryID" name="category">
          <option v-for="category in this.$store.state.menuList" v-bind:key="category.name" v-bind:value="category.id" >{{category.name}}</option>
        </select>
      </div>
    </div>

    <div class="menuItem__column">
      <div class="menuItem__label">
        메뉴이름
      </div>
      <div class="menuItem__input">
        <input type="text" v-model="name" class="input-text" autofocus />
      </div>
    </div>

    <div class="menuItem__column" id="menuItem__bill">
      <div class="menuItem__label">
        가격
      </div>
      <div class="menuItem__input">
        <label><input type="text" v-model="price" class="input-text" placeholder="숫자만 입력하세요" autofocus />원</label>
      </div>
    </div>

    <div class="wrap">
      <button class="button" v-on:click="submit">반영하기</button>
    </div>
  </div>
</template>

<script>
import {createMenu} from "../api/index.js";
export default {
  name: "MenuItem",
  data() {
    return {
      categoryID:"",
      name:"",
      price:"",
    }
  },
  methods: {
    submit:function(){
      const temp = {name:this.name, prices:[{price:this.price}]};
      createMenu(temp, this.categoryID, this.$store.state.token.access );
      this.$store.commit("PLUS_MENU",[temp,this.categoryID]);
    }
  },
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
  font-family: 'Roboto', sans-serif;
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
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

select{
  width: 300px;
  font-size: 20px;
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
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

.menuItem__input-bill{
  width: 120px;
  margin-left:20px;
  transition: width 0.4s ease-in-out;
}
.menuItem__input-bill:focus{
  width: 160px;
}



</style>
