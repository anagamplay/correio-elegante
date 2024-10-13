<template>
    <div>
      <Navbar />
      <main>
        <h1>Bem-vindo(a) à nossa loja!</h1>
        <p>Escolha uma opção abaixo:</p>
        <div class="options">
          <div @click="navigateTo('apple')" class="option-card">
            <img src="./assets/apple.jpg" alt="Maçã do Amor" />
            <h2>Maçã do Amor</h2>
          </div>
          <div @click="navigateTo('mail')" class="option-card">
            <img src="./assets/mail.jpg" alt="Correio Elegante" />
            <h2>Correio Elegante</h2>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'; 
  
  const router = useRouter();
  
  function navigateTo(routeName) {
    router.push({ name: routeName });
  }
  </script>
  
  <style scoped>
  main {
    text-align: center;
    padding: 20px;
  }
  
  .options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .option-card {
    margin: 20px;
    text-decoration: none;
    color: #474544;
    transition: transform 0.3s;
    cursor: pointer; 
  }
  
  .option-card:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }
  </style>
  