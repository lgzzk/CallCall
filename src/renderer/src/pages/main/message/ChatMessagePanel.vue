<template>
  <div class="bg flex-1 h-full">
    <div class="flex justify-between items-center drag w-full px-[20px] pt-[31px] pb-[14px]">
      <div class="flex items-center no-drag">
        <span class="text-[16px] mr-[10px]">片=======)</span>
        <div class="w-[12px] h-[12px] bg-[#1DE288] rounded-full"></div>
      </div>
      <div class="flex items-center space-x-4 no-drag">
        <telephone-svg class="action-icon" />
        <video-svg class="action-icon" />
        <screen-share-svg class="action-icon" />
        <remote-control-svg class="action-icon" />
        <group-building-svg class="action-icon" />
        <more-svg class="action-icon" />
      </div>
    </div>
    <div class="h-full overflow-y-auto">
      <!-- 左边消息 -->
      <MessageItem content="这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息这是别人发送的消息" />

      <!-- 右边消息 -->
      <MessageItem content="这是我发送的消息" :is-me="true" />
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
import MessageItem from '@renderer/pages/main/message/MessageItem.vue'


</script>

<style scoped>
.bg {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAFdJREFUGFcVyEEKwkAQRNFfQjRZ5v63cydIIIRhwnRPl/iWT3XZKaJNeoq1zFPzciWMVvQBm/7ZT1dA3pM+xPqARZ/DlSYmtCg2i5feX9/TnDZHiN2w/wAHXDgGmUIQEwAAAABJRU5ErkJggg==") center center / 100% 100% rgb(214, 233, 255);
  background-attachment: scroll;
  background-clip: border-box;
  background-origin: padding-box;
  background-repeat: repeat;
}
</style>