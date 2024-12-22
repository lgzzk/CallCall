<template>
  <div @click="textClick" ref="container" class="bg-img drag">
    <div class="flex absolute right-0 no-drag z-50">
      <setting-svg @click="textClick" class="w-[16px] h-[16px] mt-1.5 mr-1" />
      <div
        @click="closeLogin"
        class="w-[32px] h-[27px] hover:bg-[#C42B1C] hover:text-white flex items-center justify-center"
      >
        <close-svg class="w-[17px] h-[17px]" />
      </div>
    </div>
    <login />
<!--        <login-account />-->
  </div>
</template>

<script setup lang="ts">
import Login from '@renderer/pages/login/cmp/Login.vue'
import LoginAccount from '@renderer/pages/login/cmp/LoginAccount.vue'
import SettingSvg from '@renderer/assets/icons/Setting.svg'
import CloseSvg from '@renderer/assets/icons/close_16.svg'
import { ref } from 'vue'

const container = ref<HTMLElement | null>(null)

const closeLogin = () => window.electron.ipcRenderer.send('close-login')

const textClick = () => {
  console.log('textClick')
}
</script>
<style scoped>

</style>
