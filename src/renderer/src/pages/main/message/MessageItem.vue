<template>
  <div
    class="flex w-full py-3 px-5"
    :class="{'justify-end' : isMe}">
    <!-- 左边消息布局 -->
    <template v-if="!isMe">
      <img class="w-8 h-8 mr-2 rounded-full" src="../../../assets/icons/avatar.jpg">
      <div class="py-2 px-[10px] rounded-lg bg-white select-text max-w-[70%]">
        {{ content }}
      </div>
    </template>
    
    <!-- 右边消息布局 -->
    <template v-else>
      <div class="py-2 px-[10px] rounded-lg bg-[#0099FF] text-white select-text max-w-[70%]">
        {{ content }}
      </div>
      <img class="w-8 h-8 ml-2 rounded-full" src="../../../assets/icons/avatar.jpg">
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  content: string
  isMe?: boolean
}

withDefaults(defineProps<Props>(), {
  isMe: false
})
</script>

<style scoped>

</style>