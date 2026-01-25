<template>
	<view h-screen h-calc-full-111px>
　　　<view  class="grid grid-rows-2 grid-cols-[14%_86%] mt-[-20px] h45px p-[10px_0px]" grid-items-center>
      <view class="grid-row-[1/3] flex pl5px">
        <up-image src="/static/images/aigirl.png" width="40" height="40" shape="circle"></up-image>
      </view>
      <view class="grid-row-[1/2] grid"><text pl10px color-blue font-size-40rpx font-sans>Ai助手</text></view>
      <view class="pl10px">
        <text>在线ai智能助手</text>
      </view>
      </view>
      <view class="w-screen  bg-gray-50 h-calc-screen-111px">
        <chatbox></chatbox>
      </view>
	</view>
</template>

<script setup lang="ts">
   import chatbox from '@/components/ai-chat-msg/index.vue'
</script>

<style>

</style>
