<template>
  <div>
    <Header></Header>
    <Navigator></Navigator>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
export default {
  name: 'App',
  components: {
    Header,
    Navigator
  }
}
</script>

<style>
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
