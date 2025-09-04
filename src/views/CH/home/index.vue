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
      <span class="divider-title">客户至上 & 秒速响应</span>
    </el-divider>
    <div class="divider-info">
      时间是最昂贵的成本，Talent Link International(TLI)国际猎头机构快速响应、高效招聘，为您节约宝贵时间。
      过去10年来，平均每年推荐候选人205586位，面试99382人/次。
    </div>
    <div class="center-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-1"></div>
            <div class="home-title">13255家签约客户</div>
            <div class="home-content">
              TLI已经与30个行业的13255家企业建立了合作伙伴关系，
              成功招聘了20000多个岗位，TLI拥有全方位高端人才寻访、专业测评及背调服务，
              可实现平均7－30天人选上岗。
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-2"></div>
            <div class="home-title">跨国公司&企业集团</div>
            <div class="home-content">
              用出色的猎头服务赢取众多跨国公司与企业集团的合作，以“三赢”发展战略赢取市场发展空间。
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-3"></div>
            <div class="home-title">国企&大中型私企</div>
            <div class="home-content">
              国企及大中型私企占TLI客户60%以上，80%的客户选择再次合作，35%客户向其他HR推荐TLI猎头机构，
              5000多家客户获得迅猛发展，实现了利润几何级增长。
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-4"></div>
            <div class="home-title">上市企业&初创公司</div>
            <div class="home-content">
              截至2019年，TLI有上百家初创企业客户已发展成上市公司，
              高端人才成为其成功的关键因素。TLI猎头的优质人才资源服务支持让初创公司走得更远。
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider>
      <span class="divider-title">TLI国际猎头机构期待与您合作</span>
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
              >根据您的需求高效寻访、筛选、测评、推荐、面试、做背景调查
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >根据贵公司的发展战略提供人才架构、培养、留用等优质的解决方案
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >随时随地响应您的招聘需求，最大限度地为您降低沟通成本、招聘成本
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >专注高端人才市场，综合年薪人民币10万到100万+的岗位皆有丰富的运作经验
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >与您共享行业洞见与一手资讯，立足香港，辐射全球
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >定期参访国内外优秀企业，与您共享全球先进经营管理理论与实务
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
        >专注行业及领域</el-button
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
