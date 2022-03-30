<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import isLog from "@/plugins/loginCheck";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const isAuth = ref();

onMounted(() => {
  setInterval(() => {
    isAuth.value = JSON.parse(localStorage.getItem("token")).token !== "";
  }, 1000);
});
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">
          <RouterLink to="/">
            <i class="fa-solid text-warning fa-home"></i>
          </RouterLink>
        </span>

        <span class="navbar-brand" v-if="isAuth">
          <RouterLink to="/consultations">
            <i class="fa-solid fa-2x text-success fa-person"></i>
          </RouterLink>
        </span>
        <span class="navbar-brand" v-if="!isAuth">
          <RouterLink to="/login"
            ><i class="fa-solid text-success fa-power-off"></i
          ></RouterLink>
        </span>
        <span class="navbar-brand" v-else>
          <RouterLink to="/logout"
            ><i class="fa-solid text-danger fa-power-off"></i
          ></RouterLink>
        </span>
      </div>
    </nav>
  </header>
  <div
    class="vh-100 d-flex flex-wrap flex-column justify-content-center align-items-center bg-dark"
  >
    <RouterView />
  </div>
</template>

<style></style>
