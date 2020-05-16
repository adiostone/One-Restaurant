export default {
  SET_token(state, token){
    state.token = token;
    state.header = true;
  },
  SET_INFORMATION(state, information){
    if(information===""){
      console.log("정보생성필요");
      state.sign = false;
    }else{
      console.log("정보생성필요없음");
      state.information.name = information.name;
      state.information.category = information.category;
      state.information.phoneNumber = information.phoneNumber;
      state.information.minOrderPrice = information.minOrderPrice;
      state.information.address1 = information.address1;
      state.information.address2 = information.address2;
      state.information.introduction = information.introduction;
      state.information.holiday = information.holiday;
      state.information.icon = information.icon;
      state.sign = true;
    }
  },
  toggle_sign(state){
    if(state.sign===false){
      state.sign=true;
    }
  },

  SET_MENULIST(state, menuList){
    state.menuList = menuList.categories;
  },
  SET_header(state){
    state.header = true
  },
  updateMenuList(state,value){
    state.menuList = value;
  },

  PLUS_GROUP(state, groupName){
    state.menuList.push({name:groupName});
  },
  PLUS_MENU(state, list){
    let temp = list[0];
    let categoryID = list[1];
    console.log("plusMenu")
    for(let i = 0; i<state.menuList.length;i++){
      console.log(state.menuList[i]);
      console.log(categoryID);
      if(state.menuList[i].id===categoryID){
        console.log("category찾음");
        state.menuList[i].menus.push({name:temp.name,prices:temp.prices});
      }
      else{
        console.log("못찾음");
      }
    }
  },
  GET_menu(state, menuID){
    for(let i =0 ; i<state.menuList.length;i++){
      let category = state.menuList[i].name;
      let category_id = state.menuList[i].id;
      for(let j = 0; j<state.menuList[i].menus.length;j++){
        console.log(state.menuList[i].menus[j].name);
        if(state.menuList[i].menus[j].name===menuID){
          console.log("찾음");
          state.menu= {categoryID:category_id, categoryName:category, name :state.menuList[i].menus[j].name, menuID:state.menuList[i].menus[j].id,price:state.menuList[i].menus[j].prices[0].price};
        }
      }
    }
  },
  updateMenu(state,value){
    state.menu = value;
  }




};