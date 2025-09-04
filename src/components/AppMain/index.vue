<template>
  <div class="app-main">
    <transition name="fade-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>
<style scoped>
.app-main {
  padding-bottom: 100px;
  min-height: 90vh;
}
.fade-in-enter {
  opacity: 0;
}
.fade-in-enter-to {
  transition: opacity 1s ease;
}
</style>
