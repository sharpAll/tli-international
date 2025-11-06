<template>
  <div class="block">
    <el-divider>
      <div class="title">我們的願景</div>
    </el-divider>
    <div class="title-1">
      <p>
        持續提供高水准服務質量，成為與客戶、候選人共成長的一站式人力資源服務提供者
      </p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-1.jpg"
      />
    </div>
    <el-divider>
      <div class="title">我們的使命</div>
    </el-divider>
    <div class="title-1">
      <p>致力於成為客戶的首選人力資源解決方案合作夥伴</p>
      <p>致力於讓優秀的候選人尋找到最適合其才智施展的平臺和機遇</p>
      <p>致力於打造最優秀最熱心的人才招募顧問團隊</p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-2.jpg"
      />
    </div>
    <el-divider>
      <div class="title">我們的優勢</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box" style="height:370px">
        <div class="vision-content">
          <div class="vision-title">一站式精准服務</div>
          <p>
            TLI的招聘團隊可為您提供高效與精准的一站式人力資源解決方案。 除覈心業務—高端人才尋獵之外，TLI還提供人才戰略諮詢、人力資源外包及人才市場深度調研等服務，全方位滿足您的需求。
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">執業經驗豐富</div>
          <p>
            TLI專業顧問團隊平均擁有超過5年的獵頭行業從業經驗，並經過TLI內部專業和系統的技能培訓，嚴格遵循標準工作流程。 擁有所專注行業的實際從業背景是TLI團隊的獨門優勢，能更加深入的瞭解所在行業，為客戶與候選人提供更加精准的服務。
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">專注垂直領域</div>
          <p>
            TLI的顧問以行業劃分為十餘個團隊，各團隊致力於深耕所專注行業的垂直細分領域，充分掌握行業現狀與趨勢，對人才市場進行精准定位，力求提供更加專業高效以及更加貼近客戶人才訴求的服務。
          </p>
        </div>
        <div style="position:absolute;right:0;top:0;overflow:hidden">
          <img width="460px" src="../../../assets/img/vision/vision-4.jpg" />
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
  margin: 20px auto;
  font-size: 16px;
  color: #bbb;
  text-align: center;
}
.title-1 p {
  line-height: 25px;
}
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .vision-title {
  font-size: 20px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 10px;
}
.bg-box .vision-title::after {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .vision-content {
  margin-right: 500px;
  padding: 20px 20px 0;
  height: auto;
}
.bg-box .vision-content.right {
  margin-right: 0;
  margin-left: 500px;
}
.bg-box .vision-content p {
  line-height: 24px;
  color: #888;
  font-size: 15px;
}
</style>
