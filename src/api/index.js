import axios from "axios";
const dev = "https://dev.api.onetable.xyz";
const plain = "https://api.onetable.xyz"
const api = {
  login: plain+"/v1/restaurant/auth/signin",
  informationUpdate: plain+"/v1/restaurant/me/restaurant",
  informationGet: plain+"/v1/restaurant/me/restaurant",
  informationCreate:plain+"/v1/restaurant/me/restaurant",
  menuUpdate: plain+"/v1/restaurant/me/restaurant/menu-category/",
  menuListGet: plain+"/v1/restaurant/me/restaurant/all-menus",
  groupPlus:plain+"/v1/restaurant/me/restaurant/menu-category",
  menuMinus:plain+"/v1/restaurant/me/restaurant/menu-category/",
  categoryMinus:plain+"/v1/restaurant/me/restaurant/menu-category/",
  createMenu:plain+"/v1/restaurant/me/restaurant/menu-category/",
  imgurToken:"https://api.imgur.com/oauth2/token",
  uploadImage:"https://api.imgur.com/3/upload",
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
  return axios.post(
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
    {name:input.name, prices:[{price:input.price}],image:input.image, isSharing: input.isSharing},
    {headers:{Authorization: AuthStr}},
  );
}

function uploadImage(input){
  console.log("이미지 업로딩중");
  var fs = require('fs');
  let clientID = 'f1f15213109a236'
  function base64_encode(file) {
      // read binary data
      var bitmap = fs.readFileSync(file);
      // convert binary data to base64 encoded string
      return new Buffer(bitmap).toString('base64');
  }
  var result = base64_encode(input.path);
  console.log(result);

  return axios.post('https://api.imgur.com/3/image',
  {
    image: result,
    type: 'base64',
  }
  ,
  {
    headers:{
      'Authorization': 'Client-ID a8253f2d2de634e',
    }
  })
}

function deleteMenu(categoryID, menuID, token){
  const AuthStr = 'Bearer '.concat(token);
  console.log(menuID);
  return axios.delete(
    api.menuMinus.concat(categoryID)+"/menu/".concat(menuID), 
    {headers:{Authorization: AuthStr}},
  );

}

function deleteCategory(categoryID, token){
  const AuthStr = 'Bearer '.concat(token);
  return axios.delete(
    api.categoryMinus.concat(categoryID), 
    {headers:{Authorization: AuthStr}},
  );
}


export {
  fetchInformation,
  updateInformation,
  fetchMenuList,
  createGroup,
  createMenu,
  updateMenu,
  uploadImage,
  deleteMenu,
  deleteCategory

};
