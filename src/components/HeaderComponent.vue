<script>
import { ref, computed } from 'vue';
import cart from '../cart/cart';

export default {
    name: "HeaderComponent",
    setup() {
        const isDrawerOpen = ref(false);
        const totalItems = computed(() => {
            return cart.items.reduce((sum, item) => sum + item.quantity, 0);
        });

        const toggleDrawer = () => {
            isDrawerOpen.value = !isDrawerOpen.value;
        };

        const removeItem = (itemId) => {
            cart.removeItem(itemId);
        };

        const finalizePurchase = () => {
            alert('Compra finalizada!');
        };

        return {
            isDrawerOpen,
            toggleDrawer,
            cart,
            totalItems,
            removeItem,
            finalizePurchase
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
                <li class="cart-icon">
                    <i class="fa fa-shopping-cart" @click="toggleDrawer"></i>
                    <span class="cart-count" v-if="cart.items.length > 0">{{ totalItems }}</span>
                </li>
                <li><i class="fa fa-user-circle"></i></li>
            </ul>
        </nav>

        <transition name="slide-right">
            <div v-if="isDrawerOpen" class="drawer">
                <h3>Carrinho</h3>
                <div v-if="cart.isEmpty()">
                    <p>O carrinho está vazio</p>
                </div>
                <div v-else>
                    <div v-for="(item, index) in cart.items" :key="index">
                        {{ item.name }} - R$ {{ item.price }} ({{ item.quantity }})
                        <a @click="removeItem(item.id)" h>Excluir</a>
                    </div>
                    <br>
                    <button class="finalize-purchase" @click="finalizePurchase">Finalizar Compra</button>
                </div>
            </div>
        </transition>

        <div v-if="isDrawerOpen" class="drawer-overlay" @click="toggleDrawer"></div>
    </header>
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
    position: relative;
}

.cart-icon {
    position: relative;
}

.cart-count {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(10%, 10%);
    background-color: #741736;
    color: white;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
    text-align: center;
    line-height: 20px;
}

button {
    background-color: #741736;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 100%;
}

.drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
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
