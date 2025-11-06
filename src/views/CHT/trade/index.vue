<template>
  <div class="block">
    <el-divider>
      <div class="title">工業製造</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-1">
        <div class="trade-info">
          <span>化工&資料</span>
          <span>能源</span>
          <span>汽車</span>
          <span>自動化裝備</span>
          <span>軌道交通</span>
          <br/>
          <span>Jane Lee</span>
          <span>jane_lee@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">大健康</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-2">
        <div class="trade-info">
          <span>製藥</span>
          <span>醫療器械</span>
          <span>醫療服務</span>
          <span>臨床醫學</span>
          <span>大健康項目投資</span>
          <br/>
          <span>Zara Tan</span>
          <span>zara_tan@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">法律</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-3">
        <div class="trade-info">
          <span>爭議解决</span>
          <span>知識產權</span>
          <span>創投/私募</span>
          <span>並購/重組</span>
          <span>勞動法</span>
          <br/>
          <span>Jeffery Wu</span>
          <span>jeffery_wu@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">科技、媒體和通信</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-4">
        <div class="trade-info">
          <span>移動互聯網+</span>
          <span>電商</span>
          <span>物聯網</span>
          <span>遊戲</span>
          <span>互聯網金融</span>
          <br/>
          <span>Panika Lim</span>
          <span>panika_lim@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">金融</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-5">
        <div class="trade-info">
          <span>銀行</span>
          <span>租賃</span>
          <span>保險</span>
          <span>金融科技</span>
          <span>基金證券</span>
          <br/>
          <span>Nurul Binti Kamaruzaman</span>
          <span>nurul_binti_kamaruzaman@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <!-- <el-divider>
      <div class="title">企业职能</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-6">
        <div class="trade-info">
          <span>人事</span>
          <span>法务</span>
          <span>财务</span>
          <span>公关</span>
          <span>行政</span>
        </div>
      </div>
    </div> -->
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
.trade-bg-box {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.trade-bg-box .trade-bg {
  cursor: pointer;
  height: 200px;
}
.trade-bg-box .trade-bg.bg-1 {
  background: no-repeat url(../../../assets/img/trade/trade-1.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-2 {
  background: no-repeat url(../../../assets/img/trade/trade-2.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-3 {
  background: no-repeat url(../../../assets/img/trade/trade-3.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-4 {
  background: no-repeat url(../../../assets/img/trade/trade-4.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-5 {
  background: no-repeat url(../../../assets/img/trade/trade-5.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-6 {
  background: no-repeat url(../../../assets/img/trade/trade-6.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg .trade-info {
  width: 100%;
  height: 200px;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.1)
  );
  text-align: center;
  padding-top: 80px;
  /* opacity: 0; */
}
.trade-bg-box .trade-bg .trade-info span {
  margin: 0 10px;
  font-size: 22px;
  color: #333;
}
/* .trade-bg-box .trade-bg:hover .trade-info {
  transition: opacity 0.3s linear;
  opacity: 1;
} */
</style>
