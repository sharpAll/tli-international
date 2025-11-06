<template>
  <div class="block">
    <el-divider>
      <div class="title">關於TLI</div>
      <div class="title-1">Talent Link International</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">專業人才戰略</div>
          <p>
            全球領先的專業人力資源一體化解決方案提供商。我們專注于所從事行業的高端管理與專業人才招聘，依托對所從事行業的深入研究開展人才戰略咨詢、人力資源外包、人才市場深度調研及培訓等服務。我們不斷追求更高的目標，致力于打造全行業全地域的商業模式與戰略布局。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about1.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">業務遍布全球</div>
          <p>
            植根中國香港，深耕人才招聘領域，並將業務拓展至海外市場，業務範圍輻射全球，覆蓋中國香港及大陸、美國紐約、英國倫敦、法國巴黎、加拿大溫哥華和比利時布魯塞爾等全球主要政商中心，致力於深耕所專注行業的垂直領域與細分職能。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about2.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">專業顧問團隊</div>
          <p>
            以雄厚的客戶資源為背書，我們的專業顧問團隊擁有豐富的招聘經驗及深厚知識儲備，深知如何以行之有效的招聘策略協助企業把握人才變革機遇。TLI已多年連續獲得業內「最佳獵頭服務供應商」等榮譽獎項。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about3.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box u-tac" style="margin-top:50px">
      <el-button
        type="primary"
        icon="el-icon-phone"
        style="padding: 15px 40px;font-size:18px"
        @click="$router.push('./aboutUs/contactUs')"
        >聯繫我們</el-button
      >
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
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .title {
  font-size: 20px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 30px;
}
.bg-box .title::after {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .bg-content {
  margin-right: 500px;
  padding: 70px 120px 0;
  height: 333px;
}
.bg-box .bg-content.right {
  margin-right: 0;
  margin-left: 500px;
}
.bg-box .bg-content p {
  line-height: 28px;
  color: #888;
  font-size: 15px;
}
</style>
