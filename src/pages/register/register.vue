<template>
  <view h-screen w-full flex-colh-center>
    <view  mt-15>
       <up-image src="/static/images/aigirl.png" width="150rpx" height="150rpx"></up-image>
    </view>

    <view mt-10>
      <up-text text="欢迎注册AI助手" align="center"></up-text>
    </view>
    <view mt20px w-per-76 p-5>
      <up-tabs :list="tabs_arr" @click="handleClickTab" lineColor="#4698E5" lineWidth="74"
        itemStyle="padding-left: 35px; padding-right: 35px; height: 44px;"></up-tabs>
       <register-phone v-show="activeItem==='手机注册'"></register-phone>
       <register-password v-show="activeItem==='密码注册'"></register-password>
       <up-button color="#3C9CFF" mt10px @click="">注册</up-button>
       <view mt30px>
          <up-divider text="已有账号?" ></up-divider>
       </view>
       <view text-center color-link-blue mt20px overflow-hidden @click="handleLogin">立即登录</view>
    </view>
    <text>注册即表示同意<text color-link-blue pl5px pr5px>用户协议</text>和<text color-link-blue pl5px pr5px>隐私政策</text></text>
  </view>
</template>

<script setup lang="ts">
  import { reactive,ref } from 'vue';
  import registerPhone from './components/RegisterPhone.vue';
  import RegisterPassword from './components/RegisterPassword.vue';
  const tabs_arr = reactive([{
    name: "手机注册"
  }, {
    name: "密码注册"
  }])
  let activeItem = ref<string | number>("手机注册");
  type selected = {
    index:number,
    [key:string]:string | number,

  }
  function handleClickTab(item:selected) {
    // console.log("select",item)
      activeItem.value = item.name;
      // console.log("activeItem",select)
  }
  function handleLogin()
  {
     uni.navigateTo({
     	url:'/pages/login/login',

     })
  }
  // export default {
  // 	data() {
  // 		return {

  // 		}
  // 	},
  // 	methods: {

  // 	}
  // }
</script>

<style>

</style>
