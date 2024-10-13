<template>
    <section class="container hero">
      <div class="content">
        <h1>Compre</h1>
        <h1>Maçãs do amor e</h1>
        <h1>correios elegantes!</h1>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroComponent"
  };
  </script>
  
  <style scoped>
  .hero {
    background-color: #741736;
    color: white;
    padding: 50px;
    text-align: center;
    border-radius: 30px;
  }

  .content {
    margin-top: 1rem;
    margin-left: 3rem;
  }
  
  h1 {
    font-size: 3.5rem;
    margin: 0;
    font-weight: 700;
    line-height: 1;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .btn-primary, .btn-secondary {
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
  }
  
  .btn-primary {
    background-color: #f4d4d8;
    color: #7e1129;
  }
  
  .btn-secondary {
    background-color: #f4d4d8;
    color: #7e1129;
  }
  </style>
  