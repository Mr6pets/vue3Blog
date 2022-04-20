<script setup>
import Navbar from "./components/NavBar.vue"
</script>

<template>
  <Navbar />

  <router-view> </router-view>
</template>

<style scoped>
#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  color: #2c3e50;
}
</style>
