<template>
  <div v-for="consult in consultStore.consultations" :key="consult['@id']">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ consult.doctor_name }}</h5>
        <p class="card-text">date : {{ consult.date }}</p>
        <router-link
          :to="{ name: 'show_consultation', params: { id: consult.id } }"
        >
          <button class="btn btn-primary">Voir LA consultation</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/token";
import { useConsultationStore } from "../stores/consultation";
import { fetchConsults } from "../plugins/fetch";
import { onMounted } from "@vue/runtime-core";

const consultStore = useConsultationStore();
const userStore = useUserStore();

onMounted(() => {
  fetchConsults(userStore.token).then((consultsDatas) => {
    consultStore.consultations = consultsDatas["hydra:member"];
  });
});
</script>
