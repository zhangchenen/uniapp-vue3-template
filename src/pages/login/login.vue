<template>
  <view h-screen w-full flex-colh-center>
    <view mt20>
      <up-image src="/static/images/aigirl.png" width="150rpx" height="150rpx" ></up-image>
    </view>

    <view mt-10>
       <up-text text="欢迎使用aichart" align="center"></up-text>
    </view>

    <view h-calc-full-30px mt-5 w-per-76 p-5>
       <up-form labelPosition="left" :model="login_data" :rules="rules" ref="form1">
         <up-form-item prop="userName" borderBottom>
           <up-input v-model="login_data.username" prefixIcon="account-fill" placeholder="请输入用户名称"></up-input>
         </up-form-item>
         <up-form-item prop="userName" borderBottom>
           <up-input v-model="login_data.password" prefixIcon="lock-fill" placeholder="请输入账号密码"></up-input>
         </up-form-item>

       </up-form>
       <view h30px flex-align-center flex-row-between>
        <text font-size-30rpx>记住密码</text>
        <text color-link-blue font-size-30rpx @click="handleRegister">注册账号</text>
       </view>
       <up-button type="primary" mt20px color="#3C9CFF" important-border-rounded-10px>登录</up-button>
       <up-divider text="其他登录方式" :hairline="true"></up-divider>
       <view w-full flex justify-center >
         <view>
            <up-image :show-loading="true" src="/static/images/login/aabg.png" width="40px" height="40px"></up-image>
         </view>
         <view ml26px>
            <up-image :show-loading="true" src="/static/images/login/mail.png" width="40px" height="40px" ></up-image>
          </view>
         </view>

       <view w-full>
          <view w-full flex flex-items-center mt4vh justify-center>
            <text>还没有账号？</text><text text-link-blue @click="handleRegister">立即注册</text>
          </view>
          <view w-full flex flex-items-center mt5px justify-center>
            <text>登录即表示同意<text text-link-blue p2px>用户协议</text>和<text text-link-blue p2px>隐私政策</text></text>
          </view>
       </view>

    </view>

  </view>
</template>

<script lang="ts" setup>
	import { reactive, ref, onMounted } from "vue";
	// import { onReady } from '@dcloudio/uni-app';
	// import UniForms from "@/uni_modules/uni-forms/components/uni-forms/uni-forms.vue";
	const loginMethod = uniCloud.importObject('userLogin');
	let login_data = reactive({
		username: "",
		password: ""
	})

	let rules = reactive({
		username:{
			rules:[{
				required:true,
				errorMessage:"请输入用户名"
			}]
		},
		password:{
			rules:[{
				required:true,
				errorMessage:"请入密码"
			}]
		}
	})
	// let uniForm = ref<(InstanceType<typeof UniForms> & UniFormInstance | null)>(null);
	function handleSubmitForm() {
		// console.log("3333xx")
		// loginMethod.testObj();
		uniForm.value.validate().then(async (res : Boolean) => {
			if (res) {
				let result = await loginMethod.generateTokenLogin({ userName: login_data.username, passWord: login_data.password });
				if(result.code===200)
				{
					uni.showToast({
						icon:"success",
						title:"登录成功",
						duration: 2000,
					})
					localStorage.setItem("token",result.token);
				}
				else
				{
					uni.showToast({
						icon:"fail",
						title:"登录失败",
						duration: 2000,
					})
				}
				// console.log("result",result)
			}

		})
	}
	function handleRegister()
	{
		// console.log("xxx",uni)
		uni.navigateTo({
			url:'/pages/register/register',

		})
	}

</script>


<style lang="scss" scoped>
:deep(.u-divider)
{
   @apply mt50rpx
}
</style>
