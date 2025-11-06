<template>
  <div class="block">
    <el-divider>
      <div class="title">服務範疇</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">高端人才招聘</div>
          <p>
            我們以强大的客戶資源為背書，加之行之有效的招聘策略，致力於為全球範圍內的各行業企業雇主提供多元化的中高端人才招募服務，達成客戶公司的發展目標。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-1.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">人力資源諮詢</div>
          <p>
            TLI根據企業的發展戰略，推動組織戰畧實施和落地，幫助所服務的企業確定願景，設計業務戰畧，建立並推廣組織文化，設計並領導組織變革，引導業務流程優化。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-2.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">人力資源外包</div>
          <p>
            TLI代表客戶進行雇員招聘，並負責與其簽署雇傭關係。 在項目進行過程中，TLI作為客戶的人力資源夥伴管理所有跟雇員相關的複雜的行政性事務。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-3.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">人才市場調研</div>
          <p>
            為確保客戶拿到第一手的人才市場資訊，TLI通過人才招聘、留才計畫、雇主品牌和薪酬福利四個維度對市場進行充分調研，客戶可以針對性地建立自己的招聘戰畧並迅速取得成效。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-4.jpg" />
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
