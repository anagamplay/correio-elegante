<template>
  <div class="product">
    <h1>Correio Elegante</h1>
    <p>Envie uma mensagem especial com nosso correio elegante.</p>

    <form @submit.prevent="handleSubmit" id="correioForm">
      <div class="mb-3 container">
        <label for="correioQuantity" class="form-label">Quantidade de Correios Elegantes</label>
        <input
          v-model.number="correioQuantity"
          type="number"
          class="form-control"
          id="correioQuantity"
          name="correioQuantity"
          min="1"
          required
        />
      </div>

      <div class="accordion accordion-flush container" id="accordionFlushExample">
        <div v-for="i in correioQuantity" :key="i" class="accordion-item">
          <div class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#flush-collapse' + i"
              aria-expanded="true"
              :aria-controls="'flush-collapse' + i"
            >
              Correio Elegante {{ i }}
            </button>
          </div>
          <div
            :id="'flush-collapse' + i"
            class="accordion-collapse collapse"
            :class="{ show: openAccordions.has(i) }"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div class="mb-3">
                <label :for="'recipientName' + i" class="form-label">Nome do(a) Destinatário(a)</label>
                <input
                  v-model="recipientNames[i - 1]"
                  type="text"
                  class="form-control"
                  :id="'recipientName' + i"
                  :name="'recipientName' + i"
                  required
                />
              </div>
              <div class="mb-3">
                <label :for="'course' + i" class="form-label">Curso</label>
                <select
                  v-model="courses[i - 1]"
                  class="form-select"
                  :id="'course' + i"
                  :name="'course' + i"
                  required
                >
                  <option value="Informática">Informática</option>
                  <option value="Eletrotécnica">Eletrotécnica</option>
                </select>
              </div>
              <div class="mb-3">
                <label :for="'period' + i" class="form-label">Período</label>
                <select
                  v-model="periods[i - 1]"
                  class="form-select"
                  :id="'period' + i"
                  :name="'period' + i"
                  required
                >
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div class="mb-3">
                <label :for="'shift' + i" class="form-label">Turno</label>
                <select
                  v-model="shifts[i - 1]"
                  class="form-select"
                  :id="'shift' + i"
                  :name="'shift' + i"
                  required
                >
                  <option value="matutino">Matutino</option>
                  <option value="vespertino">Vespertino</option>
                </select>
              </div>
              <div class="mb-3">
                <label :for="'message' + i" class="form-label">Mensagem (máx. 100 caracteres)</label>
                <textarea
                  v-model="messages[i - 1]"
                  class="form-control"
                  :id="'message' + i"
                  :name="'message' + i"
                  rows="3"
                  maxlength="100"
                  required
                ></textarea>
              </div>
              <button type="button" class="btn buy-button" @click="saveAccordion(i)">Salvar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <button type="submit" class="btn buy-button">Finalizar Compra</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const correioQuantity = ref(1);
const recipientNames = ref(['']);
const courses = ref(['Informática']);
const periods = ref(['2']);
const shifts = ref(['matutino']);
const messages = ref(['']);
const openAccordions = ref(new Set([1]));

watch(correioQuantity, (newValue) => {
  recipientNames.value = Array(newValue).fill('');
  courses.value = Array(newValue).fill('Informática');
  periods.value = Array(newValue).fill('2');
  shifts.value = Array(newValue).fill('matutino');
  messages.value = Array(newValue).fill('');
  for (let i = 1; i <= newValue; i++) {
    openAccordions.value.add(i);
  }
});

function saveAccordion(index) {
  openAccordions.value.delete(index);
}

function handleSubmit() {
  const data = {
    quantities: correioQuantity.value,
    recipients: recipientNames.value,
    courses: courses.value,
    periods: periods.value,
    shifts: shifts.value,
    messages: messages.value,
  };
  console.log(data);
}
</script>

<style scoped>
.product {
  text-align: center;
  padding: 20px;
}

.accordion-item {
  margin-bottom: 20px;
  border: none;
}

.accordion-button {
  background-color: #da7073;
  color: white;
}

.accordion-button:not(.collapsed) {
  background-color: #da7073;
  color: white;
}

.accordion-body {
  border: 1px solid #ddd; 
  border-radius: 0 0 10px 10px; 
}

.buy-button {
  background-color: #da7073;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.buy-button:hover {
  background-color: #e6a7a9;
}

label {
  text-align: left;
  display: block;
}

@media (max-width: 600px) {
  .product {
    padding: 10px;
  }
  .form-control,
  .form-select {
    font-size: 14px;
  }
  .buy-button {
    width: 100%;
  }
}
</style>
