<template>
  <view class="mt-10px bg-[#fff] border-rd-[10px] card-shadow grid grid-rows-2 grid-cols-[18%_64%_18%] p10px">
      <view class="grid-row-[1/3] grid-col-[1/2] w40px h40px">
         <up-image width="100%" height="100%" :src="props.image"></up-image>
      </view>
      <text class="color-[#333] font-size-30rpx font-weight font-bold ">{{props.title}}</text>
      <text class="grid-row-[2/3] grid-col-[2/3] color-[#6B7280]">{{props.des}}</text>
      <view class="grid-row-[1/3] grid-col-[3/4] flex-align-center flex-justify-end">
        <text>{{props.count}}</text><up-icon name="arrow-right"></up-icon>
      </view>
  </view>
</template>

<script lang="ts" setup>
  import {defineProps} from 'vue'
  const props = withDefaults(defineProps<{image:string,title:string,des:string,count?:number}>(),{
      image:"",
      title:"",
      des:"",
      count:0,
  })
</script>

<style lang="scss" scoped>
</style>
