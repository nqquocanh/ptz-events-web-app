<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import MainAppVue from "./components/MainApp.vue";
export default {
  name: "App",
  // components: {
  //   MainAppVue,
  // },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
