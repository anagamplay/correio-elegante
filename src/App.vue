<template>
  <div id="app">
    <HeaderComponent />
    <HeroComponent />
    <ProductSection />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import ProductSection from "./components/ProductSection.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroComponent,
    ProductSection,
    FooterComponent
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f4d4d8;
  margin: 0;
  padding: 0;
}
</style>
