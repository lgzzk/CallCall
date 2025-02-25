<template>
  <div class="drag select-none w-[60px] h-screen flex flex-col items-center bg-[#0099ff]">
    <span class="text-white my-4 font-bold text-[14px]">CallCall</span>
    <img class="w-9 mb-6 rounded-full" src="@renderer/assets/icons/jz.jpg">
    <div class="space-y-1">
      <nav-message-normal-svg @click="$router.push('/main/message')" class="nav-item"/>
      <nav-contact-normal-svg @click="$router.push('/main/contact')" class="nav-item"/>
    </div>
    <div class="mt-auto mb-2 no-drag">
      <menu-svg class="w-7 text-[#E8E8E8] hover:text-white"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavMessageNormalSvg from '@renderer/assets/icons/nav_message_normal_24.svg'
import NavContactNormalSvg from '@renderer/assets/icons/nav_contact_normal_24.svg'
import MenuSvg from '@renderer/assets/icons/menu_24.svg'
</script>

<style scoped>
.nav-item{
  @apply no-drag text-white w-10 p-2 rounded-lg hover:bg-[#33ACFE] transition-colors duration-200
}
</style>