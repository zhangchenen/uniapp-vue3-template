<template>
   <view >

    <up-form
    				labelPosition="left"
    				:model="phoneModel"
    				:rules="phoneRules"
    				ref="form1"
    		>
        <up-form-item label="" prop="account" labelWidth="55">
            <up-input
                placeholder="请输入账号"
                border="surround"
                clearable
                suffixIcon="account-fill"
                v-model="phoneModel.account"
              ></up-input>

        </up-form-item>
        <up-form-item label="" prop="phonePassword" labelWidth="55">
          <view flex w-full>
             <up-input
                 placeholder="请输入密码"
                 border="surround"
                 v-model="phoneModel.phonePassword"

               ></up-input>
                <!-- <up-button type="primary" ml6px important-w90px  important-h38px>获取验证码</up-button> -->
          </view>
             <!-- <up-button type="primary" text="获取验证码"  important-h38px ml6px></up-button> -->
        </up-form-item>

    </up-form>
   </view>
</template>

<script setup lang="ts">
   import {reactive} from 'vue';
   import { test } from 'uview-plus';
   const phoneModel = reactive({
      account:"",
      phonePassword:""
   })
   const phoneRules = reactive({
     "account":[{
       type:"string",
       required:true,
       message:"请填写账号",
       trigger:['change','blur']
     }],
      phoneValid:{
        type:"string",
        required:true,
        message:"请填写验证码",
        trigger:['change','blur']
      }
   })
</script>

<style lang="sass" scoped>
</style>
