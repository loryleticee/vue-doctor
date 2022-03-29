<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">
          <RouterLink to="/">Home</RouterLink>
        </span>
        <span class="navbar-brand">
          <RouterLink to="/login">Login </RouterLink>
        </span>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style></style>
