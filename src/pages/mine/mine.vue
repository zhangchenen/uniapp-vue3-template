<template>
<view class="h-screen h-calc-screen-49px p-[0_10px_0_10px] bg-[#F9FAFB]">
  <view class="bg-[#fff] p-[10px_10px_10px_10px] mt-10px border-rd-[10px] card-shadow">
      <mineDes></mineDes>
      <sign class="mt-10px"></sign>

  </view>
  <configItem></configItem>
</view>
</template>

<script setup lang="ts">
  import mineDes from "./desmine/des.vue";
  import sign from "./sign/index.vue";
  import configItem from "../mine/config/index"
</script>

<style lang="scss" scoped>

</style>
