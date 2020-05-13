<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <a-button type="primary">button</a-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld2 msg="tst" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import { Button as AButton } from 'ant-design-vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HelloWorld2,
    AButton
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
