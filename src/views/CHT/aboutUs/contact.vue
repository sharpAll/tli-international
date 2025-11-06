<template>
  <div class="block">
    <el-divider>
      <div class="title">聯繫我們</div>
      <div class="title-1">
        如有任何問題，歡迎您向我們發送email尋求諮詢幫助。
      </div>
    </el-divider>
    <div class="center-box">
      <div class="contact-box">
        <div class="box-item">
          <div class="icon icon-1"></div>
          <div class="info">
            <div class="info-title">企業招聘</div>
            <p>
              <span class="red">jane_lee@talentlink-international.com</span>
            </p>
          </div>
        </div>
        <div class="box-item">
          <div class="icon icon-2"></div>
          <div class="info">
            <div class="info-title">個人求職</div>
            <p>
              請發送您的簡歷到
              <span class="red">zara_tan@talentlink-international.com</span
              >，如有合適崗位，相應的行業獵頭直接與您聯系
            </p>
          </div>
        </div>
        <div class="box-item">
          <div class="icon icon-3"></div>
          <div class="info">
            <div class="info-title">加入我們</div>
            <p>
              馬來西亞:Axiata Tower,Stesen Sentral 5,Kuala Lumpur sentral,Kuala
              Lumpur
            </p>
            <p>
              香港:17/F,Ovest 71-77 Wing Lok Street,Sheung Wan,HongKong
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.title {
  font-size: 24px;
  color: #333;
  text-align: center;
}
.title-1 {
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
.contact-box {
  margin: 50px auto;
  width: 660px;
}
.contact-box .box-item {
  position: relative;
  background-color: #f9f9f9;
  height: 160px;
  margin-bottom: 30px;
}
.contact-box .box-item .info {
  padding-left: 220px;
  padding-right: 50px;
}
.contact-box .box-item .info .info-title {
  padding: 40px 0 15px;
  font-size: 20px;
  color: #333;
}
.contact-box .box-item .icon {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 20px;
  left: 100px;
}
.contact-box .box-item .icon.icon-1 {
  background: url("../../../assets/img/aboutUs/icon-contact-company.png");
  background-size: cover;
}
.contact-box .box-item .icon.icon-2 {
  background: url("../../../assets/img/aboutUs/icon-contact-person.png");
  background-size: cover;
}
.contact-box .box-item .icon.icon-3 {
  background: url("../../../assets/img/aboutUs/icon-contact-joinus.png");
  background-size: cover;
}
.red {
  color: #ff0000;
}
</style>
