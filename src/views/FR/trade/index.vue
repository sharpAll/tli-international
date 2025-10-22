<template>
  <div class="block">
    <el-divider>
      <div class="title">Pembuatan perindustrian</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-1">
        <div class="trade-info">
          <span>Kimia & Bahan</span>
          <span>Tenaga</span>
          <span>Automotif</span>
          <span>Pengangkutan</span>
          <span>rel</span>
          <br/>
          <span>Jane Lee</span>
          <span>jane_lee@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Kesihatan Besar</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-2">
        <div class="trade-info">
          <span>farmasi</span>
          <span>peranti perubatan</span>
          <span>perkhidmatan perubatan</span>
          <span>perubatan klinikal</span>
          <br/>
          <span>Zara Tan</span>
          <span>zara_tan@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Undang-undang</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-3">
        <div class="trade-info">
          <span>Penyelesaian Pertikaian</span>
          <span>Harta Intelektual</span>
          <span>Modal Risiko / Swasta</span>
          <span>Penggabungan / Penyelesaian semula</span>
          <span>Undang-undang Buruh</span>
          <br/>
          <span>Jeffery Wu</span>
          <span>jeffery_wu@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Teknologi, Media dan Komunikasi</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-4">
        <div class="trade-info">
          <span>Internet mudah alih + </span>
          <span>E-dagang</span>
          <span>Internet perkara-perkara</span>
          <span>Permainan</span>
          <span>Kewangan Internet</span>
          <br/>
          <span>Panika Lim</span>
          <span>panika_lim@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">kewangan</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-5">
        <div class="trade-info">
          <span>Bank </span>
          <span>Sewa</span>
          <span>Insurans</span>
          <span>Teknologi Kewangan</span>
          <span>Sekuriti Dana</span>
          <br/>
          <span>Nurul Binti Kamaruzaman</span>
          <span>nurul_binti_kamaruzaman@talentlink-international.com</span>
        </div>
      </div>
    </div>
    <!-- <el-divider>
      <div class="title">Fungsi Perniagaan</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-6">
        <div class="trade-info">
          <span>kakitangan</span>
          <span>undang-undang</span>
          <span>kewangan</span>
          <span>hubungan awam</span>
          <span>pentadbiran</span>
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
