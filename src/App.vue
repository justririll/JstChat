<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  #app {
    /* position: relative; */
    height: 100%;
  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
</style>