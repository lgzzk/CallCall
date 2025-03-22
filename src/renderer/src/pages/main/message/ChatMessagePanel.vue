<template>
  <div class="flex flex-col bg flex-1 h-full">

    <div class="flex justify-between items-center drag w-full px-[20px] pt-[31px] pb-[14px]">
      <div class="flex items-center no-drag">
        <span class="text-[16px] mr-[10px]">片=======)</span>
        <div class="w-[12px] h-[12px] bg-[#1DE288] rounded-full"></div>
      </div>
      <div class="flex items-center space-x-4 no-drag icon-container">
        <telephone-svg />
        <video-svg />
        <screen-share-svg />
        <remote-control-svg />
        <group-building-svg />
        <more-svg />
      </div>
    </div>

    <div class="flex-1 overflow-y-auto">
      <message-item
        v-for="i in messageList[currentConversationId]"
        :key="i.id+'message'"
        :content="i.content"
        :isMe="i.isMe"
      />
    </div>
    <div class="flex flex-col no-drag w-full h-[150px]">
      <div class="flex items-start space-x-4 py-2 px-5 icon-container">
        <expression-svg />
        <screenshot-svg />
        <image-svg />
        <shake-svg />
        <lucky-money-svg />
        <microphone-svg />
      </div>
      <input
        @keydown.enter="sendMessage"
        v-model="message"
        class="w-full bg-transparent px-5 outline-none"
      >
    </div>


  </div>
</template>

<script setup lang="ts">
import TelephoneSvg from '@renderer/assets/icons/telephone_16.svg'
import VideoSvg from '@renderer/assets/icons/Video.svg'
import ScreenShareSvg from '@renderer/assets/icons/ScreenShare.svg'
import RemoteControlSvg from '@renderer/assets/icons/remote_control_16.svg'
import MoreSvg from '@renderer/assets/icons/more_16.svg'
import GroupBuildingSvg from '@renderer/assets/icons/group_building_16.svg'
import ExpressionSvg from '@renderer/assets/icons/expression_16.svg'
import ScreenshotSvg from '@renderer/assets/icons/screenshot_16.svg'
import ImageSvg from '@renderer/assets/icons/image_16.svg'
import ShakeSvg from '@renderer/assets/icons/shake_16.svg'
import MicrophoneSvg from '@renderer/assets/icons/Microphone.svg'
import LuckyMoneySvg from '@renderer/assets/icons/lucky_money_16.svg'
import MessageItem from '@renderer/pages/main/message/MessageItem.vue'
import { useMessageStore } from '@renderer/store/messageStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import http from '@renderer/utils/request'
import socket from '@renderer/utils/socket'

const message = ref('')
const messageStore = useMessageStore()
const { currentConversationId } = storeToRefs(messageStore)
const messageList = ref([
  [
    {
      id: 1,
      content: '😜😊❤️😉😉😉',
      isMe: false
    },
    {
      id: 2,
      content: 'asdasdasdasd❤️❤️❤️',
      isMe: true
    }
  ],
  [
    {
      id: 3,
      content: 'asdasdasdasd',
      isMe: true
    },
    {
      id: 4,
      content: 'asdasdas🙌dasd',
      isMe: false
    }
  ]
])

const sendMessage = _=>{

  if (!message.value.trim()){
    alert('消息内容不能为空')
    return
  }

  messageList.value[currentConversationId.value].push({
    content: message.value,
    isMe: true,
    id: 5
  })

  http.post('/api/message/sendMessage', {
    receiverId:'67c47439e80377352513b3e0',
    content: message.value,
  }).then((res)=>{
    console.log(res)
  })

  message.value = ''

}

socket.on('privateMessage', (data)=>{
  console.log(data)
  messageList.value[currentConversationId.value].push({
    content: data.message.content,
    isMe: false,
    id: 5
  })
})

</script>

<style scoped>

.icon-container svg {
  @apply w-6 hover:text-[#0099FF];
}

.bg {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAFdJREFUGFcVyEEKwkAQRNFfQjRZ5v63cydIIIRhwnRPl/iWT3XZKaJNeoq1zFPzciWMVvQBm/7ZT1dA3pM+xPqARZ/DlSYmtCg2i5feX9/TnDZHiN2w/wAHXDgGmUIQEwAAAABJRU5ErkJggg==") center center / 100% 100% rgb(214, 233, 255);
  background-attachment: scroll;
  background-clip: border-box;
  background-origin: padding-box;
  background-repeat: repeat;
}
</style>