<template>
  <div class="menuItem">
    <div class="menuItem__image">
      <v-avatar size="216" class="menuItem__avatar">
        <img v-bind:src="image" alt="이미지 없음">
      </v-avatar>
      <v-file-input
        label="File input"
        filled
        prepend-icon="mdi-camera"
        v-model="files"
        @change="upload"
        id="myFile"
      ></v-file-input>
    </div>
    <div class="menuItem__column">
      <div class="menuItem__label">
        메뉴그룹
      </div>
      <div class="menuItem__input">
        {{ categoryName }}
      </div>
    </div>

    <div class="menuItem__column">
      <div class="menuItem__label">
        메뉴이름
      </div>
      <div class="menuItem__input">
        <input type="text" class="input-text" v-model="name" autofocus />
      </div>
    </div>

    <div class="menuItem__column" id="menuItem__bill">
      <div class="menuItem__label">
        가격
      </div>
      <div class="menuItem__input">
        <label
          ><input
            type="text"
            class="input-text"
            v-model="price"
            placeholder="숫자만 입력하세요"
            autofocus
          />원</label
        >
      </div>
    </div>

    <div class="menuItem__column">
      <div class="menuItem__label">
        공유메뉴
      </div>
      <div class="menuItem__input">
            <v-checkbox
              v-model="isSharing"
              :label="`공유: ${isShare}`"
            ></v-checkbox>
      </div>
    </div>

    <div class="wrap">
      <button class="button" v-on:click="submit">반영하기</button>
    </div>
  </div>
</template>

<script>
import { updateMenu } from "../api/index.js";
import { mapFields } from "vuex-map-fields";
export default {
  name: "MenuUpdate",
  data() {
    return {
      files:[],
    }
  },
  computed: {
    isShare: function(){
      if(this.isSharing==true){
        return "가능";
      }else{
        return "불가능";
      }
    },

    ...mapFields([
    "menu.image",
    "menu.categoryName",
    "menu.name",
    "menu.price",
    "menu.isSharing",
    

    ])
  },
  created() {
    console.log("update페이지");
    this.$store.commit("FETCH_menu", {
      menuID: parseInt(this.$route.params.menuID),
      categoryID: parseInt(this.$route.params.categoryID)
    });
  },
  methods: {
    submit: function() {
      const temp = this.$store.state.menu;
      console.log(temp);
      updateMenu(temp, this.$store.state.token.access);
    },
    upload: function(){
      this.$store.dispatch("UPLOAD_MENUIMAGE",this.files);
    },
  },
  watch: {
    '$route'(to,from){
      this.$store.commit("FETCH_menu", {
      menuID: parseInt(this.$route.params.menuID),
      categoryID: parseInt(this.$route.params.categoryID)
    });
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

select {
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
img{
  width:200px;
  height:200px;
}
.menuItem__input-bill {
  width: 120px;
  margin-left: 20px;
  transition: width 0.4s ease-in-out;
}
.menuItem__input-bill:focus {
  width: 160px;
}

#myFile{
  width: 200px;
  height: 40px;
  border: 1px solid #c9c9c9;
  padding:20px;
  font-size: 20px;
  text-align: center;
}
</style>
