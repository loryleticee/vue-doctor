<template>
  <div>
    <div class="card" style="width: 18rem">
      <img src="https://place-hold.it/300" class="card-img-top" alt="https://place-hold.it/300" />
      <div class="card-body">
        <h5 class="card-title">{{ consultation.doctor_name }}</h5>
        <p class="card-text">date : {{ consultation.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConsultationStore } from "../stores/consultation";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";

const consultation = ref({});
const route = useRoute();
const store = useConsultationStore();

onMounted(() => {
  consultation.value = store.consultations.find( (c) => String(c.id) === route.params.id);
});
</script>
