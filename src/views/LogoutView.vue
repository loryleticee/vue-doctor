<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Vous allez être redirigé...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/token";

const router = useRouter();
const store = useUserStore();

store.$reset();
router.push("home");
</script>

