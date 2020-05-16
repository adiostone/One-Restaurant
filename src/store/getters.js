export default {
    GET_menu(state, categoryID, menuID){
        const menuList = {}
        Object.assign(menuList, state.menuList);
        for(let i =0 ; i<menuList.length;i++){
          if(menuList[i].id===categoryID){
            for(let j = 0; j<menuList[i].menus.length;j++){
              if(menuList[i].menus[j].id===menuID){
                console.log("찾음");
                return {name :menuList[i].menus[j].name, price:menuList[i].menus[j].prices[0].price};
              }
            }
          }
        }
      },

}
