<template>
  <div class="block">
    <el-divider>
      <div class="title">Kategori Perkhidmatan</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Pengambilan Bakat Tinggi</div>
          <p>
            Dengan menyokong sumber pelanggan yang kuat, ditambah dengan strategi pengambilan yang berkesan, kami komited untuk menyediakan pelbagai perkhidmatan pengambilan bakat menengah dan tinggi kepada majikan korporat di seluruh dunia untuk mencapai matlamat pembangunan syarikat pelanggan.
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
          <div class="title">Nasihat Sumber Manusia</div>
          <p>
            TLI memajukan pelaksanaan dan pendaratan strategi organisasi mengikut strategi pembangunan perniagaan, membantu perniagaan yang dikhidmatan menentukan visi, merancang strategi perniagaan, membina dan mempromosikan budaya organisasi, merancang dan memimpin perubahan organisasi, dan membimbing pengoptimuman proses perniagaan.
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
          <div class="title">Outsourcing Sumber Manusia</div>
          <p>
            TLI melakukan pengambilan pekerja bagi pihak pelanggan dan bertanggungjawab untuk menandatangani hubungan pekerjaan dengan mereka. Sepanjang projek, TLI menguruskan semua urusan pentadbiran yang kompleks yang berkaitan dengan pekerja sebagai rakan kongsi sumber manusia pelanggan.
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
          <div class="title">Penyelidikan pasaran bakat</div>
          <p>
            Untuk memastikan pelanggan mendapat maklumat pasaran bakat tangan pertama, TLI menyelidiki pasaran secara menyeluruh melalui empat dimensi pengambilan bakat, program pengambilan bakat, jenama majikan dan faedah gaji, yang membolehkan pelanggan membina strategi pengambilan mereka secara tertaras dan mencapai hasil dengan cepat.
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
