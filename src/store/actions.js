import {
  fetchInformation,
  fetchMenuList,
  updateInformation,
  uploadImage,
  createGroup,
  createMenu,
  deleteMenu,
  deleteCategory
} from "../api/index.js";
let ws = null;
export default {
  FETCH_INFORMATION({ commit }) {
    var vm = this;
    return fetchInformation(this.state.token.access)
      .then(response => {
        commit("SET_INFORMATION", response.data);
      })
      .catch(function(error) {
        vm.state.sign = false;
        console.log(error);
      });
  },
  UPDATE_INFORMATION({ commit }) {
    var vm = this;
    updateInformation(
      this.state.inform,
      this.state.sign,
      this.state.token.access
    );
  },
  FETCH_MENULIST({ commit }) {
    var vm = this;
    return fetchMenuList(this.state.token.access)
      .then(response => {
        commit("SET_MENULIST", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  UPLOAD_IMAGE({ commit },payload) {
    var vm = this;
    console.log("함수실행");
    console.log(payload);
    return uploadImage(payload)
      .then(response => {
        commit("SET_IMAGE",response.data.data.link);
      })
      .catch(function(error) {
        console.log(error);
      });

  },
  CREATE_GROUP({commit},payload){
    var vm = this;
    console.log(payload);
    return createGroup(payload,this.state.token.access)
      .then(response => {
        const temp = {name: payload.name, categoryID: response.data.createdID}
        commit("PLUS_GROUP",temp);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  CREATE_MENU({commit},payload){
    var vm = this;
    let categoryID = payload.categoryID;
    console.log("image잘넘어감",payload.image);
    let input = {name: payload.name, prices:payload.prices, image: payload.image.path, isSharing: payload.isSharing};
    return createMenu(input,categoryID,this.state.token.access)
      .then(response => {
        commit("PLUS_MENU",[input, categoryID, response.data.createdID]);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  DELETE_MENU({commit},payload){
    var vm = this;
    let categoryID = payload.categoryID;
    let menuID = payload.menuID;
    return deleteMenu(categoryID, menuID, this.state.token.access)
      .then(response => {
        commit("MINUS_MENU",payload);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  DELETE_CATEGORY({commit},payload){
    var vm = this;
    return deleteCategory(payload,this.state.token.access)
      .then(response => {
        commit("MINUS_CATEGORY",payload);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  UPLOAD_MENUIMAGE({ commit },payload) {
    var vm = this;
    return uploadImage(payload)
      .then(response => {
        commit("SET_MENUIMAGE",response.data.data.link);
      })
      .catch(function(error) {
        console.log(error);
      });

  },
  async CREATE_MENUIMAGE({commit},payload){
    var vm = this;
    await uploadImage(payload)
      .then(response => {
        payload = response.data.data.link;
        console.log("1",payload);
      })
      .catch(function(error) {
        console.log(error);
      });

    return payload;
  },

  FETCH_SOCKET({commit}){
    console.log("소켓시작");
    const accessToken = this.state.token.access;
    ws = new WebSocket(`wss://api.onetable.xyz/v1/restaurant/me/restaurant/order-managing?access=${accessToken}`)
    ws.onopen = (event)=>{
      console.log(event);
      console.log("connected");
    }
    ws.onmessage = (event) =>{
      const result = JSON.parse(event.data);
      console.log("result",result);
      if (result.operation==="ping"){
        const sendMessage = {operation: 'pong'};
        console.log("ping받음");
        ws.send(JSON.stringify(sendMessage));
      }else if(result.operation==='notifyNewOrder'){
        const order = result.body;
        commit('PLUS_WAITORDERS',order);
      }else if(result.operation==='replyAcceptOrder'){
        console.log("body:",result.body);
        const isSuccess = result.body.isSuccess;
        const id = result.body.id;
        console.log("reply왔음");
        console.log("type of isSuccess: ",isSuccess);
        if(isSuccess==true){
          console.log("true찾음");
          commit('waitToProcess',id);
        }
      }else if(result.operation==='replyRefuseOrder'){
        const isSuccess = result.body.isSuccess;
        const id = result.body.id;
        if(isSuccess==true){
          commit('waitToAllOf',id);
        }
      }else if(result.operation==='replyStartDelivery'){
        const isSuccess = result.body.isSuccess;
        const id = result.body.id;
        if(isSuccess==true){
          commit('processToComplete',id);
        }
      }
    }
  },

  refuseOrder({commit}, payload){
    const sendMessage = {operation:'refuseOrder', body:{id: payload}};
    ws.send(JSON.stringify(sendMessage));
  },
  acceptOrder({commit}, payload){
    const sendMessage = {operation:'acceptOrder', body:{id:payload.id, estimatedTime: payload.estimatedTime}};
    ws.send(JSON.stringify(sendMessage));
  },
  startDelivery({commit}, payload){
    const sendMessage = {operation:'startDelivery', body:{id: payload}};
    ws.send(JSON.stringify(sendMessage));
  }
};
