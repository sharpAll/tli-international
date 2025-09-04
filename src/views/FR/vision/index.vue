<template>
  <div class="block">
    <el-divider>
      <div class="title">Visi kami</div>
    </el-divider>
    <div class="title-1">
      <p>
        Menyediakan kualiti perkhidmatan yang tinggi secara berterusan dan menjadi penyedia perkhidmatan sumber manusia satu perhentian yang berkembang bersama pelanggan dan calon
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
      <div class="title">Misi Kami</div>
    </el-divider>
    <div class="title-1">
      <p>
        Komitmen untuk menjadi rakan kongsi penyelesaian sumber manusia pilihan pelanggan
      </p>
      <p>
        Komitmen untuk membolehkan calon yang cemerlang mencari platform dan peluang yang paling sesuai untuk pelaksanaan bakat mereka
      </p>
      <p>
        Kumpulan perunding yang berdedikasi untuk membina orang yang terbaik dan bersemangat untuk merekrut
      </p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-2.jpg"
      />
    </div>
    <el-divider>
      <div class="title">Kelebihan kami</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box" style="height:500px">
        <div class="vision-content">
          <div class="vision-title">Perkhidmatan tepat satu perhentian</div>
          <p>
            Pasukan pengambilan TLI menawarkan penyelesaian sumber manusia yang cekap dan tepat. Sebagai tambahan kepada perniagaan teras, pencarian bakat kelas atas, TLI juga menawarkan perkhidmatan seperti nasihat strategik bakat, outsourcing sumber manusia dan penyelidikan mendalam pasaran bakat untuk memenuhi keperluan anda.
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">pengalaman pengalaman</div>
          <p>
            Pasukan Penasihat Profesional TLI mempunyai purata lebih daripada 5 tahun pengalaman dalam industri pemburu kepala dan dilatih dalam kemahiran profesional dan sistematik TLI untuk mengikuti dengan ketat aliran kerja standard. Memiliki latar belakang praktikal dalam industri yang memberi tumpuan adalah kelebihan eksklusif pasukan TLI untuk mengetahui industri yang lebih mendalam dan menyediakan perkhidmatan yang lebih tepat kepada pelanggan dan calon.
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">
            Fokus dalam bidang menegak
          </div>
          <p>
            Penasihat TLI membahagikan industri kepada lebih daripada selusin pasukan, setiap pasukan komited untuk mengembangkan sektor yang memberi tumpuan kepada sektor menegak, memahami sepenuhnya keadaan dan trend industri, memposisikan pasaran bakat dengan tepat, berusaha untuk menyediakan perkhidmatan yang lebih profesional dan cekap dan lebih dekat dengan permintaan bakat pelanggan.
          </p>
        </div>
        <div style="position:absolute;right:0;top:0;overflow:hidden">
          <img
            width="460px"
            height="500px"
            src="../../../assets/img/vision/vision-4.jpg"
          />
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
