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
      <span class="divider-title">Pelanggan pertama & Tindakbalas kedua</span>
    </el-divider>
    <div class="divider-info">
      Masa adalah kos yang paling mahal, dan agensi pemburu kepala antarabangsa Talent Link International (TLI) menjawab dengan cepat dan cekap untuk mengupah anda dan menjimatkan masa yang berharga. Sepanjang 10 tahun yang lalu, purata 205,586 calon telah disyorkan setiap tahun dan 99,382 orang / wawancara.
    </div>
    <div class="center-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-1"></div>
            <div class="home-title">13,255 pelanggan</div>
            <div class="home-content">
              TLI telah menjalankan perkongsian dengan 13,255 syarikat di 30 industri dan telah berjaya mempekerjakan lebih daripada 20,000 pekerjaan. TLI menawarkan pelbagai perkhidmatan pencarian bakat, penilaian profesional dan penyesuaian semula untuk mencapai purata 7-30 hari untuk calon.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-2"></div>
            <div class="home-title">Syarikat & Kumpulan Perniagaan</div>
            <div class="home-content">
              Menggunakan perkhidmatan pemburu kepala yang cemerlang untuk memenangi kerjasama banyak syarikat multinasional dan kumpulan korporat untuk memenangi ruang pembangunan pasaran dengan strategi pembangunan "tiga menang".
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-3"></div>
            <div class="home-title">
              Syarikat Negara & Syarikat Swasta
            </div>
            <div class="home-content">
              Syarikat negeri dan syarikat swasta bersaiz sederhana dan besar menyumbang lebih daripada 60% pelanggan TLI, 80% pelanggan memilih untuk bekerjasama lagi, 35% pelanggan mengesyorkan institusi pemburu kepala TLI kepada HR lain, lebih daripada 5,000 pelanggan mendapat perkembangan pesat dan mencapai pertumbuhan geometri keuntungan.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-4"></div>
            <div class="home-title">Syarikat & Permulaan</div>
            <div class="home-content">
              Sehingga tahun 2019, TLI mempunyai ratusan pelanggan permulaan yang telah berkembang menjadi syarikat yang disenaraikan dan bakat kelas atas menjadi faktor utama kejayaannya. Sokongan perkhidmatan sumber bakat TLI Hunter yang berkualiti membawa syarikat permulaan lebih jauh.
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider>
      <span class="divider-title"
        >Agensi Pemburu Kepala Antarabangsa TLI berharap untuk bekerjasama dengan anda</span
      >
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
              >Menemua, menyaring, menguji, mengesyorkan, wawancara, dan melakukan semakan latar belakang yang cekap mengikut keperluan anda
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Menyediakan penyelesaian yang berkualiti tinggi mengikut strategi pembangunan syarikat anda
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Menanggap keperluan pengambilan anda pada bila-bila masa dan di mana-mana untuk meminimumkan kos komunikasi dan pengambilan
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Menumpukan kepada pasaran bakat kelas atas, gaji tahunan RMB 100,000 hingga 1 juta + jawatan mempunyai pengalaman operasi yang kaya
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Kongsi wawasan industri dan maklumat langsung dengan anda, berdasarkan Hong Kong, Radiation Global
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Lawatan kerap kepada syarikat-syarikat yang cemerlang di dalam dan luar negara
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
        >Industri dan bidang tumpuan</el-button
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
  padding: 10px 0 6px 20px;
}
.bg-box .bg-content ul li {
  line-height: 20px;
  font-size: 16px;
  margin: 10px 0;
}
</style>
