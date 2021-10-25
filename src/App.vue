<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {fireStoreCore} from "../configs/firebase";

export default {
  setup(){
    async function getTransactions(){
      const response = await fireStoreCore.collection('transaction').get();
      console.log(response.docs);
    }
    getTransactions()
    console.log('adadasd')
  },
  name: 'App',

  components: {
    HelloWorld
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
