<template>
  <footer class="footer">
    <template v-if="curLanguage == 'CHT'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title.png" height="50px" />
        </div>
        <div class="map" style="left: 260px;">
          <div class="title">网站地图</div>
          <ul>
            <li @click="$router.push('/CHT/home')">首頁</li>
            <li @click="$router.push('/CHT/aboutUs')">關於我們</li>
            <li @click="$router.push('/CHT/range')">服務範疇</li>
            <li @click="$router.push('/CHT/service')">服務內容與流程</li>
            <li @click="$router.push('/CHT/vision')">愿景使命與優勢</li>
            <li @click="$router.push('/CHT/trade')">專注行業及領域</li>
            <li @click="$router.push('/CHT/custom')">客戶及評價</li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else-if="curLanguage == 'EN'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title.png" height="50px" />
        </div>
        <div class="map" style="left: 180px;">
          <div class="title">Website Map</div>
          <ul>
            <li @click="$router.push('/EN/home')">Profile</li>
            <li @click="$router.push('/EN/aboutUs')">About us</li>
            <li @click="$router.push('/EN/range')">Services Covered</li>
            <li @click="$router.push('/EN/service')">
              Services Contests&Process
            </li>
            <li @click="$router.push('/EN/vision')">
              Vision,Mission and Advantages
            </li>
            <li @click="$router.push('/EN/trade')">Specialized Industries</li>
            <li @click="$router.push('/EN/custom')">Clients&Evaluations</li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else-if="curLanguage == 'FR'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title.png" height="50px" />
        </div>
        <div class="map" style="left: 180px;">
          <div class="title">Website Map</div>
          <ul>
            <li @click="$router.push('/FR/home')">Laman Utama</li>
            <li @click="$router.push('/FR/aboutUs')">mengenai kami</li>
            <li @click="$router.push('/FR/range')">Kategori</li>
            <li @click="$router.push('/FR/service')">Proses</li>
            <li @click="$router.push('/FR/vision')">
              Visi Misi dan Kelebihan
            </li>
            <li @click="$router.push('/FR/trade')">
              Industri yang fokus
            </li>
            <li @click="$router.push('/FR/custom')">
              Penilaian
            </li>
          </ul>
        </div>
      </div>
    </template>
    <div class="right">
      Copyright 2020 Talent Link International All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    curLanguage() {
      return this.$store.state.language.curLan;
    }
  },
  components: {},

  methods: {}
};
</script>
<style scoped>
.footer {
  background: #eee;
}
.footer .content {
  width: 1200px;
  margin: auto;
  height: 70px;
  position: relative;
  overflow: hidden;
}
.footer .content .logo {
  position: absolute;
  top: 20px;
  left: 0;
}
.footer .content .map {
  position: absolute;
  top: 15px;
  left: 260px;
}
.footer .content .map .title {
  font-size: 14px;
  color: #333;
  padding-left: 20px;
  position: relative;
}
.footer .content .map .title::after {
  position: absolute;
  content: "";
  display: block;
  width: 3px;
  height: 12px;
  background: #666;
  top: 3px;
  left: 0;
}
.footer .content .map ul {
  margin-top: 10px;
}
.footer .content .map ul li {
  float: left;
  margin-right: 20px;
  cursor: pointer;
}
.footer .content .map ul li:hover {
  color: #606ecd;
}
.footer .right {
  color: #aaa;
  text-align: center;
}
</style>
