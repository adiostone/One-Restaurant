import { getField } from "vuex-map-fields";
export default {
  getField,

  inform(state) {
    return state.inform;
  },
  menu(state) {
    return state.menu;
  },
  menuList(state) {
    return state.menuList;
  },
  waitOrders(state){
    return state.waitOrders;
  },
  orderByID:(state) => (id)=>{
    const orders = state.allOfOrders;
    for(let i = 0; i<orders.length; i++){
      if(orders[i].id === id){
        return orders[i];
      }
    }
  },
  byMenuShared:(state) => (id) =>{
    const orders = state.allOfOrders;
    let result = [];
    for(let i = 0; i<orders.length; i++){
      if(orders[i].id === id){
        console.log(orders[i].byMenu.menus.length);
        for(let j = 0; j<orders[i].byMenu.menus.length;j++){
          if(orders[i].byMenu.menus[j].isShared === true){
            result.push(orders[i].byMenu.menus[j]);
          }
        }
      }
    }
    return result;
  },
  byMenuNotShared:(state) => (id) =>{
    const orders = state.allOfOrders;
    let result = [];
    for(let i = 0; i<orders.length; i++){
      if(orders[i].id === id){
        for(let j = 0; j<orders[i].byMenu.menus.length;j++){
          if(orders[i].byMenu.menus[j].isShared === false){
            result.push(orders[i].byMenu.menus[j]);
          }
        }
      }
    }
    return result;
  },
  singleCustomer:(state) => (id) =>{
    const orders = state.allOfOrders;
    let result = [];
    for(let i = 0; i<orders.length; i++){
      if(orders[i].id === id){
        for(let j = 0; j<orders[i].byCustomer.length; j++){
          if(orders[i].byCustomer[j].isNonF2F===true){
            result.push(orders[i].byCustomer[j]);
          }
        }
      }
    }
    return result;
  },
  groupCustomer:(state) => (id) =>{
    const orders = state.allOfOrders;
    let result = [];
    for(let i = 0; i<orders.length; i++){
      if(orders[i].id === id){
        for(let j = 0; j<orders[i].byCustomer.length; j++){
          if(orders[i].byCustomer[j].isNonF2F===false){
            result.push(orders[i].byCustomer[j]);
          }
        }
      }
    }
    return result;
  }

};
