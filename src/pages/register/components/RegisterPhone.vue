<template>
   <view >

    <up-form
    				labelPosition="left"
    				:model="phoneModel"
    				:rules="phoneRules"
    				ref="form1"
    		>
        <up-form-item label="" prop="phoneNumber" labelWidth="55">
            <up-input
                placeholder="请输入手机号"
                border="surround"
                clearable
                v-model="phoneModel.phoneNumber"
                suffixIcon="phone-fill"
              ></up-input>

        </up-form-item>
        <up-form-item label="" prop="phoneValid" labelWidth="55">
          <view flex w-full>
             <up-input
                 placeholder="请输入验证码"
                 border="surround"
                 clearable
                 v-model="phoneModel.phoneValid"
               ></up-input>
               <view ml6px important-w90px  important-h38px>
                   <up-button type="primary">获取验证码</up-button>
               </view>

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
      phoneNumber:"",
      phoneValid:""
   })
   const phoneRules = reactive({
     "phoneNumber":[{
       type:"string",
       required:true,
       message:"请填写手机号",
       trigger:['change','blur']
     },{
       // 自定义验证函数，见上说明
       			validator: (rule, value:number, callback) => {
       				// 上面有说，返回true表示校验通过，返回false表示不通过
       				// uni.$u.test.mobile()就是返回true或者false的
       				return uni.$u.test.mobile(value);
       			},
       			message: '手机号码不正确',
       			// 触发器可以同时用blur和change
       			trigger: ['change','blur'],
     }],
      phoneValid:[{
        type:"string",
        required:true,
        message:"请填写验证码",
        trigger:['change','blur']
      }]
   })
</script>

<style lang="scss" scoped>


</style>
