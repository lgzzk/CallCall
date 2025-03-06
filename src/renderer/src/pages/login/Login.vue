<template>
  <div
    class="h-screen flex flex-col items-center select-none"
  >
    <img class="w-[105px] mt-[128px] rounded-full" src="../../assets/icons/jz.jpg" />
    <span class="mt-[20px] mb-[37px]">片=======)</span>
    <button
      @click="login"
      class="w-[190px] h-[37px] bg-[#0099FF] hover:bg-[#008DEB] active:bg-[#0081D6] text-white text-[15px] rounded-[8px] no-drag cursor-auto"
    >
      登录
    </button>
  </div>
</template>

<script setup lang="ts">

const login = () => window.electron.ipcRenderer.send('login-success')
</script>

<style scoped>

</style>
