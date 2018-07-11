<template>
  <div id="app">

   <router-view></router-view>
  </div>
</template>

<script>
import dashboard from './components/Dashboard.vue';
import Vue from 'vue'


Vue.component('dashboard',dashboard);
export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
