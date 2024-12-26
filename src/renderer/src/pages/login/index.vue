<template>
  <div ref="container" class="bg-img drag">
    <div class="flex absolute right-0 no-drag z-50">
      <setting-svg class="w-[16px] h-[16px] mt-1.5 mr-1" />
      <div
        @click="closeLogin"
        class="w-[32px] h-[27px] hover:bg-[#C42B1C] hover:text-white flex items-center justify-center"
      >
        <close-svg class="w-[17px] h-[17px]" />
      </div>
    </div>
    <div class="flex justify-center items-center absolute bottom-[26px] w-full text-[#0099FF] text-[14px] no-drag select-none font-medium">
      <span @click="switchLogin = false" class="cursor-pointer">其它登录</span>
      <div class="w-[1px] h-[12px] bg-[#008CFF] mx-2"></div>
      <span @click="switchLogin = true" class="cursor-pointer">更多选项</span>
    </div>
    <login v-if="switchLogin" />
    <login-account v-else />
  </div>
</template>

<script setup lang="ts">
import Login from '@renderer/pages/login/cmp/Login.vue'
import LoginAccount from '@renderer/pages/login/cmp/LoginAccount.vue'
import SettingSvg from '@renderer/assets/icons/Setting.svg'
import CloseSvg from '@renderer/assets/icons/close_16.svg'
import { ref } from 'vue'

const container = ref<HTMLElement | null>(null)
const switchLogin = ref(false)

const closeLogin = () => window.electron.ipcRenderer.send('close-login')
</script>
<style scoped>

</style>
