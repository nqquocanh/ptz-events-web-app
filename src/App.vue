<template>
  <div id="app">
    <MainAppVue />
  </div>
</template>

<script>

import MainAppVue from './components/MainApp.vue';
export default {
  name: 'App',
  components: {
    MainAppVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
