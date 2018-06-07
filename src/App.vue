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
  name: 'App',
  mounted() {
    this.customers = customers;
  },
  data() {
    return {
      customers: []
    };
  },
  methods: {
    customerSelected(customer) {
      console.log(`Customer Selected:\nid: ${customer.id}\nname: ${customer.name}`);
    },
    onChange(value) {
      // do something with the current value
    }
  },
  components: {
    Autocomplete
  }
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
