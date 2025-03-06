<template>
  <div
    class="h-screen px-8 flex flex-col items-center text-[14px] select-none"
  >
    <img class="w-[90px] rounded-full mt-[60px]" src="../../assets/icons/im-logo.png" />
    <div class="relative input-item mb-[15px] mt-[20px]">
      <input
        v-model="username"
        type="text"
        placeholder="输入用户名"
        maxlength="12"
        class="input">
      <close-svg
        v-if="username"
        @click="clearAccount"
        class="absolute top-1/2 -translate-y-1/2 text-[#999999] right-[10px] w-[21px] cursor-pointer"
      />
    </div>
    <div class="relative input-item mb-[30px]">
      <input
        v-model="password"
        type="password"
        placeholder="输入密码"
        maxlength="12"
        class="input">
      <close-svg
        v-if="password"
        @click="clearPassword"
        class="absolute top-1/2 -translate-y-1/2 text-[#999999] right-[10px] w-[21px] cursor-pointer"
      />
    </div>
    <button
      @click="login"
      :class="[username && password ? 'but' : 'but-forbid']"
      class="w-full h-[37px] text-white text-[15px] rounded-[8px] no-drag cursor-auto"
    >
      登录
    </button>
  </div>
</template>

<script setup lang="ts">
import CloseSvg from '@renderer/assets/icons/close_16.svg'
import { ref } from 'vue'
import { userLogin } from '@renderer/api/auth'

const username = ref<string | null>(null)
const password = ref<string | null>(null)

const clearAccount = () => username.value = null
const clearPassword = () => password.value = null

const login = async () => {
  if (username.value && password.value) {
    const data = await userLogin(username.value, password.value)
    if (data.success) window.electron.ipcRenderer.send('login-success')
  }
}
</script>

<style scoped>
.input {
  @apply w-full h-[40px] text-center outline-none no-drag;
}

.input-item {
  @apply w-full flex bg-white overflow-hidden rounded-[8px];
}

.but-forbid {
  @apply bg-[#82C9FF] cursor-not-allowed;
}

.but {
  @apply bg-[#0099FF] hover:bg-[#008DEB] active:bg-[#0081D6] cursor-pointer;
}

/*除数字输入框的上下箭头*/
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
  -webkit-appearance: textfield; /* Chrome, Safari, Edge */
  appearance: textfield; /* General */
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0; /* Remove default margin in Chrome */
}


</style>
