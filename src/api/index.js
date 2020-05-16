import axios from "axios";

const api = {
  login: "https://api.onetable.xyz/v1/restaurant/auth/signin",
  informationUpdate: "https://api.onetable.xyz/v1/restaurant/me/restaurant",
  informationGet: "https://api.onetable.xyz/v1/restaurant/me/restaurant",
  informationCreate:"https://api.onetable.xyz/v1/restaurant/me/restaurant",
  menuUpdate: "https://api.onetable.xyz/v1/restaurant/me/restaurant/menu-category/",
  menuListGet: "https://api.onetable.xyz/v1/restaurant/me/restaurant/all-menus",
  groupPlus:"https://api.onetable.xyz/v1/restaurant/me/restaurant/menu-category",
  menuPlus: "",
  createMenu:"https://api.onetable.xyz/v1/restaurant/me/restaurant/menu-category/"
};

function fetchInformation(token) {
  const AuthStr = 'Bearer '.concat(token);
  return axios.get(
    api.informationGet, 
    {headers:{Authorization: AuthStr}},
  );
}
function updateInformation(information, sign, token){
  const AuthStr = 'Bearer '.concat(token);
  if(sign===false){
    console.log("post요청보냄");
    axios.post(
      api.informationCreate,
      information,
      {headers:{Authorization: AuthStr}},
    );
  }else{
    console.log("patch요청보냄");
    axios.patch(
      api.informationUpdate, 
      information,
      {headers:{Authorization: AuthStr}},
    );
  }
}
function createGroup(name, token){
  const AuthStr = 'Bearer '.concat(token); 
  axios.post(
    api.groupPlus,
    name,
    {headers:{Authorization: AuthStr}},
  );
}
function fetchMenuList(token) {
  const AuthStr = 'Bearer '.concat(token);
  return axios.get(
    api.menuListGet, 
    {headers:{Authorization: AuthStr}},
  );
}

function createMenu(input,categoryID, token){
  const AuthStr = 'Bearer '.concat(token);
  return axios.post(
    api.createMenu.concat(categoryID)+"/menu", 
    input,
    {headers:{Authorization: AuthStr}},
  );
}

function updateMenu(input, token){
  const AuthStr = 'Bearer '.concat(token);
  console.log("update성공");
  axios.patch(
    api.createMenu.concat(input.categoryID)+"/menu/".concat(input.menuID),
    {name:input.name, prices:[{price:input.price}]},
    {headers:{Authorization: AuthStr}},
  );
}



export {
  fetchInformation,
  updateInformation,
  fetchMenuList,
  createGroup,
  createMenu,
  updateMenu

};
