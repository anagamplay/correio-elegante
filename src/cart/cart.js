import { reactive } from 'vue';

const cart = reactive({
    items: [],
    addItem(item) {
        const existingItem = this.items.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
    },
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    },
    isEmpty() {
        return this.items.length === 0;
    }
});

export default cart;
