<template>
  <view class="p-[10px_10px_10px] flex flex-col">
     <view class="font-size-24rpx pb-5px color-[#aaa] justify-center flex text-align-center w-full">
        {{formatTime(message.create_time)}}
     </view>
     <view :class="{flex:true,reverse:message.isAi}">
       <view class="flex">
          <up-image width="45" height="45" shape="circle" :src="message.isAi?'/static/images/aigirl.png':''"></up-image>
       </view>
       <view class="bg-white border-rounded-5px p-[12px_5px] ml10px cursor-text break-all select-text max-w-[calc(98%-45px)]">

       </view>
     </view>
  </view>
</template>

<script setup lang="ts">
  import { DefineProps,withDefaults } from 'vue/dist/vue.js';
  import {type msg} from './types/aiProps';
  import dayjs from 'dayjs';
  import {checkTimeStrMatchFormat} from "@/utils";
  const props = withDefaults(defineProps<{message:msg}>(),{
     message:()=> ({
       content:"",
       isDelete:false,
       create_time:"",
       isAi:false,
     })
  })
  function formatTime(time:Date | string | number):string
  {
      let dateStr="";

      if(typeof time === "number" || time instanceof Date)
      {
          dateStr = dayjs(time).format("YYYY-MM-DD HH:mm:ss")
      }
      if(typeof time === "string" && checkTimeStrMatchFormat(time))
      {
          dateStr = time;
      }
      return dateStr
  }
</script>

<style lang="scss" scoped>
 .reverse
 {
    @apply flex-row-reverse
 }
</style>
