
<template>
    <div class="text-center" data-app >
        <v-dialog v-model="dialog" :width="wid" >
            <template v-slot:activator="{ on }">
                <v-btn text large color="primary" v-on="on" class="modal" >상세정보 <i class="fas fa-file-invoice-dollar"></i> </v-btn>
            </template>
            <v-stepper v-model="e1">
                <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">전체 주문 정보</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">단체수령 주문정보</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 3" step="3">개인수령 주문정보</v-stepper-step>
                </v-stepper-header>

                <v-divider></v-divider>

                <v-stepper-items>
                <v-stepper-content step="1">
                    <OrderModal v-bind:orderID="order.id" />

                    <v-btn
                    color="primary"
                    @click="e1 = 2; wid = 900"
                    class="stepper-btn1"
                    >
                    단체배달 주문정보 보기
                    </v-btn>

                </v-stepper-content>

                <v-stepper-content step="2">
                    <div class="information-container">
                        <GroupModal v-bind:orderID="order.id"  class="modals" />
                    </div>
                    

                    <v-btn
                    color="primary"
                    class="stepper-btn2"
                    @click="e1 = 3; wid =900"
                    >
                    개인배달 주문정보 보기
                    </v-btn>

                </v-stepper-content>

                <v-stepper-content step="3">
                    <div class="information-container">
                        <SingleModal v-bind:orderID="order.id" class="modals" />
                    </div>
                    

                    <v-btn
                    color="primary"
                    class="stepper-btn3"
                    @click="e1 = 1; wid =400"
                    >
                    전체 주문정보 보기
                    </v-btn>

                </v-stepper-content>



                </v-stepper-items>
            </v-stepper>
        </v-dialog>
    </div>
</template>

<script>
import OrderModal from "./OrderModal.vue";
import SingleModal from "./SingleModal.vue";
import GroupModal from "./GroupModal.vue";
export default {
    props:['orderID'],
    data () {
      return {
        e1: 1,
        wid: 400,
        dialog:false,
      }
    },
    components:{
        OrderModal,
        SingleModal,
        GroupModal,
    },
    computed: {
        order(){
            console.log("props넘어옴:",this.orderID);
            return this.$store.getters.orderByID(this.orderID);
        }
    },
    mounted() {
        this.fetchID();
    },
    methods:{
        fetchID(){
            console.log('orderID');
        }
    }
}
</script>

<style scoped>
.text-center >>> .modal{
    height:150px;
    background-color:#039BE5;
    color:white;
    font-weight: 600;
    font-size: 18px;
    border:none;
}
.text-center >>> .continue-button{
    color: white;
    background-color:#0042d1;
}
.information-container{
    display:flex;
    justify-content: space-between;
    
}
.text-center >>> .modals{
    margin-right:0px;
}
.text-center >>> .stepper-btn1{
    margin-top:10px;
    width:100%;
    background-color:tomato;
    color:orangered;
    
    
}
.text-center >>> .stepper-btn2{
    margin-top:10px;
    width:100%;
    background-color:lightslategray;
    color:#0042d1;
    
}

.text-center >>> .stepper-btn3{
    margin-top:10px;
    width:100%;
    background-color:lightslategray;
    color:#512DA8;
}
</style>