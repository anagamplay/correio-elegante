<template>
  <div id="app">
    <Navbar /> 
    <router-view /> 
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'; 
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif; 
  text-align: center; 
  color: #474544;
  margin: 0; 
}
</style>
