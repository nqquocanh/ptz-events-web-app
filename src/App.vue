<template>
  <div id="app">
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./pages/layout/TheFooter.vue";
import TheHeader from "./pages/layout/TheHeader.vue";

export default {
  components: { TheHeader, TheFooter },
  name: "App",
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
