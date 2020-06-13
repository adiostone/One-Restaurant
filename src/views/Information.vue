<template>
  <v-parallax
      dark
      height="100vh"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSalr3-pil_JuIcgxAdBPnb9RnfXPAGIqOA8vt0FpXraIe1oaR9&usqp=CAU"
    >
  <div class="information">
    <div class="information__column">
      <div class="information__label">
        이미지등록
      </div>
      <div class="information__image">
          <v-avatar size="216" class="information__avatar">
            <img v-bind:src="icon" alt="이미지 없음">
          </v-avatar>
      </div>
      <div class="information__input" data-app>
            <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
              v-model="files"
              @change="upload"
              id="myFile"
            ></v-file-input>
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        식당명
      </div>
      <div class="information__input">
        <input type="text" v-model="name" class="input-text" autofocus />
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        카테고리
      </div>
      <div class="information__input">
        <v-select
          v-model="category"
          :items="items"
          label="Solo field"
          centered
          solo
        ></v-select>
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        핸드폰번호
      </div>
      <div class="information__input">
        <input type="text" v-model="phoneNumber" class="input-text" autofocus />
      </div>
    </div>

    <div class="information__column" id="money">


      <div class="information__packing">
        <div class="information__label">
          최소주문금액
        </div>
        <div class="information__input">
          <input
            type="text"
            v-model="minOrderPrice"
            class="input-text"
            autofocus
          />
        </div>
      </div>

      <div class="information__minMoney">
        <div class="information__label">
          기본배달비
        </div>
        <div class="information__input">
          <input
            type="text"
            v-model="deliveryCost"
            class="input-text"
            autofocus
          />
        </div>
      </div>

    </div>

    <div class="information__column" id="money">
      <div class="information__packing">
        <div class="information__label">
          포장비
        </div>
        <div class="information__input">
          <input
            type="text"
            v-model="packagingCost"
            class="input-text"
            autofocus
          />
        </div>
      </div>

      <div class="information__minMoney">
        <div class="information__label">
          개인배달비
        </div>
        <div class="information__input">
          <input
            type="text"
            v-model="nonF2FCost"
            class="input-text"
            autofocus
          />
        </div>
      </div>



    </div>

    <div class="information__column">
      <div class="information__label">
        주소(상세주소)
      </div>
      <div class="information__input" id = "information__address">
        <h5>{{address1}}</h5>
        <Address />
      </div>
      <div class="information__input">
        <input type="text" v-model="address2" class="input-text" autofocus />
      </div>
    </div>

    <div class="information__column">
      <div class="information__label">
        식당소개
      </div>
      <div class="information__input">
        <input
          type="textarea"
          v-model="introduction"
          class="input-text"
          autofocus
        />
      </div>
    </div>

    <div class="wrap">
      <button class="button" v-on:click="submit">반영하기</button>
    </div>
  </div>
  </v-parallax>
</template>

<script>
import { updateInformation } from "../api/index.js";
import { mapFields } from "vuex-map-fields";
import Address from "../components/Address.vue";

export default {
  name: "Information",
  components: {
    Address
  },
  data() {
    return {
      files:[],
      items:['치킨','피자','분식']
    }
  },
  computed: {
    ...mapFields([
      "inform.icon",
      "inform.name",
      "inform.category",
      "inform.phoneNumber",
      "inform.minOrderPrice",
      "inform.address1",
      "inform.introduction",
      "inform.address2",
      "inform.deliveryCost",
      "inform.nonF2FCost",
      "inform.packagingCost"
    ])
  },
  created() {
    this.$store.dispatch("FETCH_INFORMATION");
  },
  methods: {
    submit: function() {
      this.$store.dispatch("UPDATE_INFORMATION");
      this.$store.commit("toggle_sign");
    },
    upload: function(){
      this.$store.dispatch("UPLOAD_IMAGE",this.files);
    }
  }
};
</script>

<style scoped>
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 30px;
  /* background-color: #615A63; */
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
  color: black;
  font-size: 20px;
  font-weight: 600;
}

.button {
  width: 720px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 600;
  opacity: 0.8;
  color: #000;
  background-color: #EEEEEE;
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

select {
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
  color:white;
}

.input-text {
  width: 200px;
  height: 40px;
  border: 1px solid #c9c9c9;
  font-size: 20px;
  text-align: center;
  background-color: white;
}

.input-text {
  transition: width 0.4s ease-in-out;
  color:black;
}

.input-text:focus {
  width: 300px;
}
.image_upload {
  width: 300px;
  border-radius: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.v-input__control{
  width: 300px;
}

#information__address{
  display:flex;
  align-items: center;
  margin-bottom: 20px;
}
img{
  width:200px;
  height:200px;
}
#myFile{
  width: 200px;
  height: 40px;
  border: 1px solid #c9c9c9;
  padding:20px;
  font-size: 20px;
  text-align: center;
}

#money{
  display:flex;
  flex-direction: row;
  justify-content:center;
}

.information__packing{
  margin-right:10px;
}
.information__minMoney{
  margin-left:10px;
}
</style>
