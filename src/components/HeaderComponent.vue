<template>
    <header class="container header">
      <nav>
        <ul>
          <li>Maçãs</li>
          <li>Sorteios</li>
          <li>Surpresas</li>
          <li>Covetes</li>
          <li>Correio</li>
          <li>Conceitos</li>
          <li>Promoção</li>
        </ul>
        <div class="icons">
          <i class="fa fa-search"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-share"></i>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent"
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #ffded9;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  nav ul li {
    cursor: pointer;
    font-weight: 600;
  }
  
  .icons i {
    margin-left: 15px;
    cursor: pointer;
  }
  </style>
  