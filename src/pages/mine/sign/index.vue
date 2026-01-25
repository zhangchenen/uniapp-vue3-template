<template>
  <view class="sign">
    <view>
      <view class="cursor-pointer flex flex-row-between mb-10px"><text class="color-[#666]">个性签名</text><up-icon name="arrow-right"></up-icon></view>
      <up-textarea v-model="props.person_sign" placeholder="请输入签名" autoHeight disabled></up-textarea>
    </view>

  </view>
</template>

<script setup lang="ts">
    import {defineProps,withDefaults} from 'vue'
    const props = withDefaults(defineProps<{person_sign?:string}>(),{
      person_sign:""
    })

</script>

<style lang="scss" scoped>

</style>
