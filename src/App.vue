<template>
  <NConfigProvider :theme="store.state.theme" :locale="store.state.locale">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Home />
    <NButton @click="store.state.theme = darkTheme">深色</NButton>
    <NButton @click="store.state.theme = null">浅色</NButton>
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import {darkTheme, NConfigProvider, NButton} from 'naive-ui';
  import HelloWorld from '@/components/HelloWorld.vue';
  import Home from './pages/Home/Home.vue';
  import {useStore} from '@/store/store';

  const store = useStore();

  // export default defineComponent({
  //   setup() {
  //     return {
  //       darkTheme,
  //       HelloWorld,
  //       NConfigProvider,
  //       NButton,
  //       theme: ref<any>(null),
  //     };
  //   },
  // });
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
