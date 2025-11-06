<template>
  <div class="block">
    <el-divider>
      <div class="title">客户评价</div>
    </el-divider>
    <div class="center-box">
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-1.jpg')"
            ></el-avatar>
            <div class="content-box">
              <p>
                “TLI的顧問團隊對行業的理解力能我們印象深刻。 我認為他們不僅是專業的招募團隊，更是我們具體業務的好顧問。”
              </p>
            </div>
            <div class="person-box">——國際汽車製造企業 | 人力資源總監</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-2.jpg')"
            ></el-avatar>
            <div class="content-box">
              <p>
                “TLI給我們提供了極其豐富且符合我們需求的候選人，他們在全球各地的當地政府及商業界都具有廣泛的資源。”
              </p>
            </div>
            <div class="person-box">——全球頂尖諮詢公司 | 人力資源總監</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-3.jpg')"
            ></el-avatar>

            <div class="content-box">
              <p>
                “TLI的專業洞察力令人印象深刻，在人才招募過程中一直給我們及時有效的支持。 我們將與TLI一起成長。 我們信任他們。”
              </p>
            </div>
            <div class="person-box">——大型外資工業製造商 | 人力資源總監</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-4.jpg')"
            ></el-avatar>

            <div class="content-box">
              <p>
                “TLI對行業、商業的嘗試理解力令我驚訝，他們一直積極行動並提供有價值的建議。”
              </p>
            </div>
            <div class="person-box">
              ——中國航空航太企業頭部公司 ｜人力資源總監
            </div>
          </div>
        </el-col>
      </el-row>
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
.evaluate-box {
  position: relative;
}
.evaluate-box .el-avatar {
  position: absolute;
  left: 40px;
}
.evaluate-box .content-box {
  font-size: 17px;
  line-height: 25px;
  color: #312d2d;
  text-indent: 40px;
  padding: 15px 0 15px 160px;
  border-left: 5px solid #606ecd;
}
.evaluate-box .person-box {
  font-size: 17px;
  text-align: right;
  color: #333;
  padding-right: 20px;
  border-right: 5px solid #606ecd;
  margin-top: 20px;
}
</style>
