<template>
  <div
    class="h-screen bg-gray-50 flex flex-col items-center bg-img select-none drag"
  >
    <div class="flex absolute right-0 no-drag">
      <setting-svg class="w-[16px] h-[16px] mt-1.5 mr-1" />
      <div
        @click="closeLogin"
        class="w-[32px] h-[27px] hover:bg-[#C42B1C] hover:text-white flex items-center justify-center"
      >
        <close-svg class="w-[17px] h-[17px]" />
      </div>
    </div>
    <img class="w-[105px] mt-[128px] rounded-full" src="../../assets/icons/jz.jpg" />
    <span class="mt-[20px] mb-[37px] hover:text-blue-500 no-drag"
    >片=======)</span
    >
    <button
      @click="login"
      class="w-[190px] h-[37px] bg-[#0099FF] hover:bg-[#008DEB] active:bg-[#0081D6] text-white text-[15px] rounded-[8px] no-drag cursor-auto"
    >
      登录
    </button>
    <div class="mt-[50px] flex items-center text-[#0099FF] no-drag">
      <span class="text-[14px] cursor-pointer">移出账号</span>
      <div class="w-[.75px] h-[12px] bg-[#D2D4D6] mx-2"></div>
      <span class="text-[14px] cursor-pointer">移出账号</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseSvg from '../../assets/icons/close_16.svg'
import SettingSvg from '../../assets/icons/Setting.svg'

const closeLogin = () => window.electron.ipcRenderer.send('close-login')
const login = () => window.electron.ipcRenderer.send('login-success')

</script>
<style scoped>
.no-drag {
  -webkit-app-region: no-drag;
}

.drag {
  -webkit-app-region: drag;
}

.bg-img {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
</style>
