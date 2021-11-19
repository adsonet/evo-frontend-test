<template>
  <div id="app">
    <DashBoard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import DashBoard from './views/Dashboard.vue'

export default {
  name: 'App',
  components: {
    DashBoard
  }
}
</script>


<style>
/* @import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css'); */
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
