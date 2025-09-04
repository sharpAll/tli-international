<template>
  <div class="block">
    <el-divider>
      <div class="title">Penilaian Pelanggan</div>
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
                "Kami terkesan dengan pemahaman industri oleh pasukan perunding TLI. Saya fikir mereka bukan sahaja pasukan pengambilan profesional tetapi juga penasihat yang baik untuk perniagaan khusus kami. ”
              </p>
            </div>
            <div class="person-box">
              ——Syarikat pembuatan kereta antarabangsa | Pengarah Sumber Manusia
            </div>
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
                "TLI menawarkan calon yang sangat kaya dan sesuai dengan keperluan kami dengan pelbagai sumber di kerajaan tempatan dan komuniti perniagaan di seluruh dunia. ”
              </p>
            </div>
            <div class="person-box">
              ——Syarikat Perundingan Terbaik Dunia | Pengarah Sumber Manusia
            </div>
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
                 "Wawasan profesional TLI sangat mengesankan dan sentiasa memberi kami sokongan yang tepat pada masanya dan berkesan dalam proses pengambilan bakat. Kami akan berkembang dengan TLI. Kami mempercayai mereka. ”
              </p>
            </div>
            <div class="person-box">
              ——Pengilang industri asing besar | Pengarah Sumber Manusia

            </div>
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
                 “Saya terkejut dengan pemahaman percubaan TLI mengenai industri dan perniagaan, dan mereka sentiasa bertindak secara aktif dan memberikan nasihat yang berharga. ”
              </p>
            </div>
            <div class="person-box">
              ——Ketua Syarikat Aeroangkasa China ｜Pengarah Sumber Manusia
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
