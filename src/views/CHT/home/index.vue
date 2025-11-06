<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item>
        <div class="carousel-bg bg-1"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-bg bg-2"></div>
      </el-carousel-item>
    </el-carousel>
    <el-divider>
      <span class="divider-title">客戶至上 & 秒速回應</span>
    </el-divider>
    <div class="divider-info">
      時間是最昂貴的成本，Talent Link International(TLI)國際獵頭機構快速響應、高效招聘，為您節省寶貴時間。  過去10年來，平均每年推薦候選人205,586位，面試99,382人/次。
    </div>
    <div class="center-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-1"></div>
            <div class="home-title">13255家簽約客戶</div>
            <div class="home-content">
              TLI已與30個行業的13,255家企業建立合作伙伴關係，成功招聘20,000多個職位。TLI提供全方位高端人才搜尋、專業評測及背景調查服務，可實現平均7－30天人選上崗。
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-2"></div>
            <div class="home-title">跨國公司 & 企業集團</div>
            <div class="home-content">
              以卓越的獵頭服務贏得眾多跨國公司與企業集團的合作，以"三贏"發展戰略贏取市場發展空間。
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-3"></div>
            <div class="home-title">國企&大中型私企</div>
            <div class="home-content">
              國企及大中型私企佔TLI客戶60%以上，80%的客戶選擇再次合作，35%客戶向其他HR推薦TLI獵頭機構，5000多家客戶獲得迅猛發展，實現了利潤幾何級增長。
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-4"></div>
            <div class="home-title">上市企業&創業公司</div>
            <div class="home-content">
              截至2019年，TLI已幫助上百家創業公司客戶成長為上市公司，高端人才成為其成功關鍵因素。TLI獵頭的優質人才資源服務支持，讓創業公司走得更遠。
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider>
      <span class="divider-title">TLI國際獵頭機構期待與您合作</span>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <ul>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >根據您的需求高效尋訪、篩選、測評、推薦、面試、做背景調查
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >根據貴公司的發展戰略提供人才架構、培養、留用等優質的解決方案
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >隨時隨地響應您的招聘需求，最大限度為您降低溝通成本、招聘成本
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >專注高端人才市場，綜合年薪人民幣10萬至100萬+的職位均有豐富運作經驗
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >與您分享行業洞見與一手資訊，立足香港，放眼全球
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >定期參訪國內外優秀企業，與您分享全球先進經營管理理論與實務
            </li>
          </ul>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/home/home-info.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box u-tac" style="margin-top:50px">
      <el-button
        type="primary"
        icon="el-icon-s-flag"
        style="padding: 15px 40px;font-size:18px"
        @click="$router.push('./trade')"
        >專注行業及領域</el-button
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
.carousel-bg {
  width: 100%;
  height: 100%;
}
.carousel-bg.bg-1 {
  background: center url(../../../assets/img/1.jpg) no-repeat;
  background-size: cover;
}
.carousel-bg.bg-2 {
  background: center url(../../../assets/img/2.jpg) no-repeat;
  background-size: cover;
}
.home-icon {
  width: 100px;
  height: 100px;
  margin: 20px auto 15px;
}
.home-icon.icon-1 {
  background: #1b3045 center url(../../../assets/img/home/icon-home1.png)
    no-repeat;
  background-size: cover;
}
.home-icon.icon-2 {
  background: #1b3045 center url(../../../assets/img/home/icon-home2.png)
    no-repeat;
  background-size: cover;
}
.home-icon.icon-3 {
  background: #1b3045 center url(../../../assets/img/home/icon-home3.png)
    no-repeat;
  background-size: cover;
}
.home-icon.icon-4 {
  background: #1b3045 center url(../../../assets/img/home/icon-home4.png)
    no-repeat;
  background-size: cover;
}
.home-title {
  color: #333;
  font-size: 18px;
  margin: 8px auto;
  text-align: center;
}
.home-content {
  margin: 0 20px;
  color: #9b9b9b;
  font-size: 14px;
  line-height: 20px;
}
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .bg-content {
  margin-right: 500px;
}
.bg-box .bg-content ul {
  padding: 30px 0 30px 20px;
}
.bg-box .bg-content ul li {
  line-height: 30px;
  font-size: 16px;
  margin: 10px 0;
}
</style>
