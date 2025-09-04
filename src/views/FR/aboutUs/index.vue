<template>
  <div class="block">
    <el-divider>
      <div class="title">Mengenai TLI</div>
      <div class="title-1">Talent Link International</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Strategi Profesional</div>
          <p>
            Penyedia penyelesaian sumber manusia yang terkemuka di dunia. Kami komited untuk merekrut pengurusan dan profesional kelas atas untuk pelanggan dalam industri yang kami tumpuan, dan kami mengandalkan penyelidikan mendalam dalam industri yang kami tumpuan untuk menjalankan perundingan strategik bakat, outsourcing sumber manusia, penyelidikan mendalam pasaran bakat dan latihan. Kami sentiasa mengejar matlamat yang lebih tinggi dan komited untuk membina model perniagaan dan susun atur strategik di seluruh industri.
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
          <div class="title">Perniagaan di seluruh dunia</div>
          <p>
            Berakar di Hong Kong, China, dalam bidang pengambilan bakat, dan mengembangkan perniagaan ke pasaran luar negeri, jangkauan perniagaan memancarkan global, meliputi pusat perniagaan utama global seperti Hong Kong, China dan daratan, Amerika Syarikat New York, London, United Kingdom, Paris, Perancis, Vancouver, Kanada dan Brussels, Belgium, komited untuk mengembangkan bidang menegak dan fungsi segmen industri yang memberi tumpuan.
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
          <div class="title">Pasukan Penasihat Profesional</div>
          <p>
            Disokong oleh sumber pelanggan yang kuat, pasukan perunding profesional kami mempunyai pengalaman pengambilan yang luas dan simpanan pengetahuan yang mendalam dan mengetahui bagaimana strategi pengambilan yang berkesan dapat membantu perniagaan mengambil peluang perubahan bakat. TLI telah memenangi anugerah penghormatan seperti "Pembekal Perkhidmatan Pemburu Kepala Terbaik" dalam industri selama bertahun-tahun berturut-turut.
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
        >Hubungi Kami</el-button
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
  padding: 70px 80px 0;
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
