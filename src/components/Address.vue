<template>
  <div class="text-center" data-app >
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn  class = "address__button" color="red lighten-2" dark v-on="on">
          주소 찾기
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Privacy Policy
        </v-card-title>
        <DaumPostcode :on-complete=handleAddress />

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DaumPostcode from "vuejs-daum-postcode";
import axios from "axios";

export default {
  data() {
    return {
      dialog: false
    };
  },
  components: {
    DaumPostcode,
  },
  methods: {
    handleAddress: async function(data){
      console.log(data)
      let fullAddress = data.address
      let extraAddress = ''
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName)
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '')
      }
      this.$store.commit("SET_ADDRESS",fullAddress);
      let payload = {latitude: 0, longitude:0};
      await axios.get('https://dapi.kakao.com/v2/local/search/address.json'+'?'+'query='+data.address,

      {
        headers:{
          'Authorization': 'KakaoAK ac0cbfd239fbda37b7d20e31e9fc1cb8',
        }
      }).then(response=>{
        console.log(response.data.documents[0].x);
        console.log(response.data.documents[0].y);
        payload.latitude = response.data.documents[0].y;
        payload.longitude = response.data.documents[0].x;
        
      })
      console.log(payload);
      this.$store.commit("SET_MAP",payload);
    }
  }
};
</script>

<style scoped>
.address__button{
  margin-left:20px;
}
</style>
