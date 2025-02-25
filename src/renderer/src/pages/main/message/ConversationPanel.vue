<template>
  <div class="flex flex-col">
    <div class="flex pt-[28px] pb-[10px] px-4 drag">
      <input
        class="h-[28px] py-2 px-6 text-[12px] no-drag outline-none bg-[#F5F5F5] rounded-s"
        placeholder="搜索"
      >
      <div class="flex justify-center items-center no-drag w-7 bg-[#F5F5F5] hover:bg-[#EBEBEB] ml-1 rounded-s">
        <add-svg class="w-[16px] text-[#ACACAC]" />
      </div>
    </div>
    <viewprot/>
    <viewprot/>
    <viewprot/>
    <viewprot/>
  </div>
</template>

<script setup lang="ts">
import AddSvg from '@renderer/assets/icons/add_24.svg'
import Viewprot from '@renderer/pages/main/message/Viewprot.vue'
</script>

<style scoped>

</style>