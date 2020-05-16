import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

const store =  new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    sign:false,
    token: {},
    header: false,

    information:{
      name:"",
      introduction:"",
      icon:"",
      category:"없음",
      holiday:"",
      phoneNumber:"",
      minOrderPrice:0,
      address1:"",
      address2:"",
    },
    menu:{},

    categories:[],

    menuList:[
      {
        id:1,
        name:"시카고피자",
        menus:[
          {
            id:3,
            name:"치즈듬뿍",
            prices:[
              {price:16000}
            ]
          }
        ]
      }
    ],
    



  },
  getters,
  mutations,
  actions
});
export default store;