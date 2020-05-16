<template>
  <div class="information">

    <!-- <div class="information__column">
      <div class="information__label">
        이미지등록
      </div>
      <div class="information__input">
          <input class="image_upload" type="file" />
      </div>
    </div> -->

    <div class="information__column">
      <div class="information__label">
        식당명
      </div>
      <div class="information__input">
        <input type="text" v-model="inform.name" class= "input-text" autofocus />
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        카테고리
      </div>
      <div class="information__input">
        <input type="text"  v-model="inform.category" class= "input-text" autofocus />
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        핸드폰번호
      </div>
      <div class="information__input">
        <input type="text"  v-model="inform.phoneNumber" class= "input-text" autofocus />
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        최소주문금액
      </div>
      <div class="information__input">
        <input type="text" v-model="inform.minOrderPrice" class= "input-text" autofocus />
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        주소
      </div>
      <div class="information__input">
        <input type="text" v-model="inform.address1" class= "input-text" autofocus />
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        식당소개
      </div>
      <div class="information__input">
        <input type="textarea" v-model="inform.introduction" class= "input-text" autofocus />
      </div>
    </div>

    <div class="wrap">
      <button class="button" v-on:click="submit" >반영하기</button>
    </div>

  </div>
</template>

<script>
import {updateInformation} from "../api/index.js";
export default {    
    name: "Information",
    data() {
      return {
        inform:{}
      }
    },
    created(){
      this.$store.dispatch('FETCH_INFORMATION');
      
      var temp = this.$store.state.information;
      
      this.inform.name = temp.name;
      this.inform.category = temp.category;
      this.inform.phoneNumber = temp.phoneNumber;
      this.inform.minOrderPrice = temp.minOrderPrice;
      this.inform.address1 = temp.address1;
      this.inform.introduction = temp.introduction;
      console.log(this.inform);
      
    },
    methods:{
      submit:function(){
        this.$router.push("Home");
        console.log(this.$store.state.sign);
        updateInformation(this.inform, this.$store.state.sign, this.$store.state.token.access );
        this.$store.commit("toggle_sign");
        this.$store.commit("SET_INFORMATION",this.inform);
        this.$router.go(1);
      
      }
    }
}

</script>

<style scoped>
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 30px;
}
.information__column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 70%;
  margin-bottom: 30px;
}


.information__submit {
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

.information__label {
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
.image_upload{
  width: 300px;
  border-radius: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>