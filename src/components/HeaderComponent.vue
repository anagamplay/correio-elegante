<script>
import { ref } from 'vue';

export default {
    name: "HeaderComponent",
    setup() {
        const isDrawerOpen = ref(false);

        const toggleDrawer = () => {
            isDrawerOpen.value = !isDrawerOpen.value;
        };

        return {
            isDrawerOpen,
            toggleDrawer
        };
    }
};
</script>

<template>
    <header class="container header">
        <nav class="nav-content">
            <ul class="menu-text">
                <li>Home</li>
                <li>Carrinho</li>
                <li>Conta</li>
            </ul>
            <ul class="menu-icons">
                <li><i class="fa fa-shopping-cart" @click="toggleDrawer"></i></li>
                <li><i class="fa fa-user-circle"></i></li>
            </ul>
        </nav>
    </header>

    <transition name="slide-right">
        <div v-if="isDrawerOpen" class="drawer">
            <p>teste</p>
        </div>
    </transition>

    <div v-if="isDrawerOpen" class="drawer-overlay" @click="toggleDrawer"></div>
</template>

<style scoped>
.header {
    background-color: #ffded9;
    padding: 15px;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-text,
.menu-icons {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    color: #474544;
}

.menu-text li {
    cursor: pointer;
    font-weight: 600;
    margin-right: 20px;
}

.menu-icons li {
    margin-left: 20px;
    font-size: 1.5rem;
    cursor: pointer;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: #ffded9;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2em;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
