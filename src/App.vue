<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Autocomplete items="customers" filterby="name"/>
  </div>
</template>

<script>

import customers from './assets/customers';
import Autocomplete from './components/Autocomplete'

export default {
  name: 'App'
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
