<template>
  <div>
    <Header />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Header from './layout-index.vue';


</script>

<style lang="less" scoped>
</style>