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
    <conversation
      v-for="i in 5"
      :key="i+'conversation'"
      @click="setConversationId(i-1)"
      class="cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
import AddSvg from '@renderer/assets/icons/add_24.svg'
import Conversation from '@renderer/pages/main/message/Conversation.vue'
import { useMessageStore } from '@renderer/store/messageStore'

const messageStore = useMessageStore()

function setConversationId(id: number){
  messageStore.currentConversationId = id
}

</script>

<style scoped>

</style>