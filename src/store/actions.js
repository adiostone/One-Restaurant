import{
    fetchInformation,
    fetchMenuList,


} from "../api/index.js";


export default {
    FETCH_INFORMATION({commit}){
        var vm = this;
        return fetchInformation(this.state.token.access)
        .then(
            response=>{
            commit('SET_INFORMATION',response.data);
            })
        .catch(function(error){
            vm.state.sign = false;
            console.log(error); 
        });
    },
    FETCH_MENULIST({commit}){
        var vm = this;
        return fetchMenuList(this.state.token.access)
        .then(
            response=>{
            commit('SET_MENULIST',response.data);
            })
        .catch(function(error){
            console.log(error); 
        });
    },


};
