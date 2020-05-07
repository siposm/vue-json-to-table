<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ListingModule msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
  </ul>
  </div>
</template>

<script>
import ListingModule from './components/ListDevelopers.vue'

export default {
  name: 'App',
  components: {
    ListingModule
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
  margin-top: 60px;
}
#app img {
  width: 30px;
}
</style>
