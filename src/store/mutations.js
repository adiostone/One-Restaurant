import { updateField } from "vuex-map-fields";

export default {
  updateField,

  SET_token(state, token) {
    state.token = token;
    state.header = true;
  },
  SET_INFORMATION(state, information) {
    console.log(information);
    if (information === "") {
      console.log("정보생성필요");
      state.sign = false;
    } else {
      console.log("정보생성필요없음");
      state.inform = information;
      state.sign = true;
    }
  },
  toggle_sign(state) {
    if (state.sign === false) {
      state.sign = true;
    }
  },

  SET_MENULIST(state, menuList) {
    state.menuList = menuList.categories;
  },
  SET_header(state) {
    state.header = true;
  },
  updateMenuList(state, value) {
    state.menuList = value;
  },
  PLUS_GROUP(state, group) {
    console.log(group);
    state.menuList.push({ name: group.name, id:group.categoryID, menus:[]});
  },
  PLUS_MENU(state, list) {
    let temp = list[0];
    let categoryID = list[1];
    let menuID = list[2];
    console.log("plusMenu");
    for (let i = 0; i < state.menuList.length; i++) {
      console.log(state.menuList[i]);
      console.log(categoryID);
      if (state.menuList[i].id === categoryID) {
        console.log("category찾음");
        state.menuList[i].menus.push({ name: temp.name, id:menuID, prices: temp.prices,image:temp.image, isSharing:temp.isSharing });
      } else {
        console.log("못찾음");
      }
    }
  },
  FETCH_menu(state, payload) {
    for (let i = 0; i < state.menuList.length; i++) {
      let category = state.menuList[i].name;
      let category_id = state.menuList[i].id;
      console.log(
        "payload.categoryID:",
        payload.categoryID,
        " 그냥categoryID:",
        category_id
      );
      if (category_id === payload.categoryID) {
        for (let j = 0; j < state.menuList[i].menus.length; j++) {
          if (state.menuList[i].menus[j].id === payload.menuID) {
            state.menu = {
              image: state.menuList[i].menus[j].image,
              categoryID: category_id,
              categoryName: category,
              name: state.menuList[i].menus[j].name,
              menuID: state.menuList[i].menus[j].id,
              price: state.menuList[i].menus[j].prices[0].price,
              isSharing: state.menuList[i].menus[j].isSharing,
            };
            console.log(state.menu);
          }
        }
        
      }
    }
  },
  updateMenu(state, value) {
    state.menu = value;
  },
  SET_ADDRESS(state, address){

    state.inform.address1 = address;
  },
  SET_IMAGE(state, link){
    state.inform.icon = link;
  },
  SET_MENUIMAGE(state, link){
    state.menu.image = link;
  },
  SET_MAP(state, payload){
    state.inform.latitude = payload.latitude;
    state.inform.longitude = payload.longitude;
  },
  MINUS_MENU(state, payload){
    for (let i = 0; i < state.menuList.length; i++) {
      let category = state.menuList[i].name;
      let category_id = state.menuList[i].id;
      if (category_id === payload.categoryID) {
        for (let j = 0; j < state.menuList[i].menus.length; j++) {
          if (state.menuList[i].menus[j].id === payload.menuID) {
            state.menuList[i].menus.splice(j,1);
          }
        }
        
      }
    }
  },
  MINUS_CATEGORY(state, payload){
    for (let i = 0; i < state.menuList.length; i++) {
      let category = state.menuList[i].name;
      let category_id = state.menuList[i].id;
      if (category_id === payload) {
        state.menuList.splice(i,1);
        break
      }
    }
  },
  PLUS_WAITORDERS(state, payload){
    state.waitOrders.push(payload);
    state.alert = true;
    state.allOfOrders.push(payload);
  },
  waitToProcess(state, payload){
    console.log("replyID:",payload);
    const id = payload;
    for(let i=0; i<state.waitOrders.length; i++){
      if(state.waitOrders[i].id===id){
        const temp = state.waitOrders[i];
        console.log("찾음!!!!!");
        state.processOrders.push(temp);
        state.waitOrders.splice(i,1);
        break;
      }
    }
  },
  waitToAllOf(state, payload){
    const id = payload;
    for(let i=0; i<state.waitOrders.length; i++){
      if(state.waitOrders[i].id===id){
        const temp = state.waitOrders[i];
        state.waitOrders.splice(i,1);
        break;
      }
    }
  },
  processToComplete(state, payload){
    const id = payload;
    for(let i=0; i<state.processOrders.length; i++){
      if(state.processOrders[i].id===id){
        const temp = state.processOrders[i];
        state.completeOrders.push(temp);
        state.processOrders.splice(i,1);
        break;
      }
    }
  },
}
