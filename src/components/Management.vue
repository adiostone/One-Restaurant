<template>
  <main class="menus">
    <div class="menus__name">
      <div class="menus__name-id">
        1인식당 사장님
      </div>
      <div class="menus__name-logout">
        로그아웃
      </div>
    </div>
    <div class="menus__row">
      <div class="menus__menu">
        <div class="menus__menu-text">
          정보 수정
        </div>
        <div class="menus__menu-set">
          <router-link class= "link" to="/information">설정하기</router-link> 
        </div>
      </div>
      <div class="menus__menu">
        <div class="menus__menu-text">
          리뷰 관리
        </div>
        <div class="menus__menu-set">
          설정하기
        </div>
      </div>
    </div>
    <div class="menus__row">
      <div class="menus__menu">
        <div class="menus__menu-text">
          영업시간 설정
        </div>
        <div class="menus__menu-set">
          설정하기
        </div>
      </div>
      <div class="menus__menu">
        <div class="menus__menu-text">
          휴무일 설정
        </div>
        <div class="menus__menu-set">
          설정하기
        </div>
      </div>
    </div>
    <div class="menus__row">
      <div class="menus__menu">
        <div class="menus__menu-text">
          영업 임시중지
        </div>
        <div class="menus__menu-set">
          설정하기
        </div>
      </div>
      <div class="menus__menu">
        <div class="menus__menu-text">
          알림설정
        </div>
        <div class="menus__menu-set">
          설정하기
        </div>
      </div>
    </div>

    <div class="menus__version">
      <div class="menus__menu-text">
        버전정보
      </div>
      <div class="menus__version-text">
        PC접수 버전 2.1.0.0 최신 버전입니다.
      </div>
      <div class="menus__menu-set">
        업데이트
      </div>
    </div>
    <div class="menus__version">
      <div class="menus__menu-text">
        메뉴얼
      </div>
      <div class="menus__version-text">
        <router-link class="#" to="/">다운로드</router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Management",
  props: {
    msg: String
  },
  created(){
    this.$store.dispatch('FETCH_INFORMATION');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menus {
  margin-top: 30px;
  padding: 0px 10px;
}
.menus__name {
  display: flex;
  margin-bottom: 40px;
}
.menus__name-id {
  font-weight: 700;
  color: black;
  font-size: 20px;
  padding: 5px 10px;
}
.menus__name-logout {
  margin-left: 10px;
  color: white;
  padding: 5px 10px;
  background-color: #ffb21c;
  padding-top: 7px;
}

.menus__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.menus__menu {
  display: flex;
  justify-content: space-between;
  width: 580px;
  border: 2px solid #f2f2f2;
}
.menus__menu-text {
  font-size: 16px;
  font-weight: 600;
  padding: 10px 50px;
  margin: 10px;
}
.menus__menu-set {
  border: 1px solid #f2f2f2;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 50px;
  margin: 10px;
}

.menus__version {
  width: 100%;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.menus__version-text {
  font-size: 16px;
  font-weight: 600;
  padding: 10px 50px;
  margin: 10px;
  opacity: 0.6;
}

.link{
  text-decoration:none;
}
</style>
