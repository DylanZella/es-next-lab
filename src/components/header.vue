<template>
  <div class="header-container shadow-sm justify-between">
    <a class="header-logo flex items-center" href="/">
      <img src="@/assets/site-logo.png" alt="logo" />
      <span class="text-lg ml-1">语法实验室</span>
    </a>
    <div class="flex items-center">
      <a href="https://github.com/DylanZella/es-next-lab">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="w-7 h-7"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <span class="text-xs text-gray-500 ml-3">
        V 0.1.0
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
</script>

<style lang="scss" scoped>
  .header-container {
    height: 4rem;
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    padding: 0 2rem;
    background-color: white;
    align-items: center;
  }
  .header-logo {
    & > span {
      color: #e99547;
      font-weight: 600;
    }
    & > img {
      height: 2rem;
    }
  }
</style>
