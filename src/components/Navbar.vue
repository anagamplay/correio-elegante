<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/logo.svg" alt="Logo da Loja" />
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul :class="{ 'active': isMenuActive }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/apple">Maçã do Amor</router-link></li>
        <li><router-link to="/mail">Correio Elegante</router-link></li>
      </ul>
    </nav>
  </template>

<script setup>
import { ref } from 'vue';

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}
</script>


<style scoped>
.navbar {
  background-color: #474544;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.navbar ul {
  list-style: none;
  display: flex;
}

.navbar li {
  margin: 0 15px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.logo img {
  width: 30px;
  height: auto;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
}

ul.active {
  display: flex; 
  flex-direction: column; 
  position: absolute;
  top: 60px; 
  left: 0;
  background-color: #474544;
  width: 100%; 
}

@media (max-width: 768px) {
  .navbar ul {
    display: none; 
  }

  .menu-toggle {
    display: flex;
  }

  ul.active {
    display: flex; 
  }

  .navbar ul {
    flex-direction: column;
    width: 100%; 
  }

  .navbar li {
    margin: 10px 0; 
    text-align: center; 
  }
}
</style>
