<template>
<div class="flex flex-row w-full h-screen select-none overflow-hidden">
    <sidebar-nav/>
    <router-view/>
</div>
<div class="flex items-center absolute space-x-[10px] top-0 right-0 no-drag z-50">
  <min-svg class="w-[17px] h-[17px]" />
  <max-svg class="w-[17px] h-[17px]" />
  <div
    @click="closeMain"
    class="w-[32px] h-[27px] hover:bg-[#C42B1C] hover:text-white flex items-center justify-center"
  >
    <close-svg class="w-[17px] h-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">
import SidebarNav from '@renderer/pages/main/SidebarNav.vue'
import CloseSvg from '@renderer/assets/icons/close_16.svg'
import MaxSvg from '@renderer/assets/icons/max_16.svg'
import MinSvg from '@renderer/assets/icons/minimize_16.svg'

const closeMain = () => window.electron.ipcRenderer.send('close-main')
</script>

<style scoped>

</style>
