import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    sign: false,
    alert:false,
    token: {},
    header: false,
    inform:{
      name:"",
      introduction:"",
      icon:"https://www.missioninfra.net/img/noimg/noimg_4x3.gif",
      category:"치킨",
      holiday:"",
      phoneNumber:"",
      minOrderPrice:0,
      address1:"",
      address2:"",
      latitude: 0,
      longitude:0,
      deliveryCost:0,
      nonF2FCost:0,
      packagingCost:0
    },
    menu: {},
    categories: [],
    menuList: [],
    waitOrders:[
      {
        id: 22,
        byCustomer:[
          {
            phoneNumber: "102151",
            isNonF2F: false,
            address:"서울 용산구",
            request:"무 많이요",
            menus:[
              {
                id: 24,
                quantity: 2,
                isShared:true,
                pricePerCapita: 2500,
                name: "후라이드 치킨",
                packagingCost: 1200,
              }
            ],
            deliveryCostPerCapita:2050,
            nonF2FCost: 5300,
            totalPrice: 2500
          },
        ],
        byMenu : {
            menus:[
              {
                id: 125,
                quantity: 4,
                isShared:true,
                pricePerCapita: 3500,
                name: "양념 치킨",
                packagingCost: 1200,
              }
            ],
            totalPackaginCost: 20500,
            deliveryCost: 2000,
            totalNonF2FCost: 20150,
            totalPrice: 20150
            
          }
        }
        
        
    ],
    processOrders:[],
    completeOrders:[],
    allOfOrders:[
      {
        id: 22,
        byCustomer:[
          {
            phoneNumber: "102151",
            isNonF2F: false,
            address:"서울 용산구",
            request:"무 많이요",
            menus:[
              {
                id: 24,
                quantity: 2,
                isShared:true,
                pricePerCapita: 2500,
                name: "후라이드 치킨",
                packagingCost: 1200,
              }
            ],
            deliveryCostPerCapita:2050,
            nonF2FCost: 5300,
            totalPrice: 2500
          },
        ],
        byMenu : {
            menus:[
              {
                id: 125,
                quantity: 4,
                isShared:true,
                pricePerCapita: 3500,
                menuTotalPrice:38000,
                name: "양념 치킨",
                packagingCost: 1200,
              },
              {
                id: 12,
                quantity: 2,
                isShared:false,
                pricePerCapita: 3100,
                name: "후라이드 치킨",
                menuTotalPrice:32000,
                packagingCost: 1400,
              },
            ],
            totalPackaginCost: 20500,
            deliveryCost: 2000,
            totalNonF2FCost: 20150,
            totalPrice: 20150
            
          }
        }
    ],
  },
  getters,
  mutations,
  actions
});
export default store;
