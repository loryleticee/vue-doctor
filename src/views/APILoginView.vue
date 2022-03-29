<template>
  <div class="bg-dark">
    <form @submit.prevent="handleSubmit" class="d-flex flex-column p-5 gap-2">
      <input
        type="text"
        v-model="user.username"
        name="username"
        id="username"
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        id="password"
        v-model="user.password"
        placeholder="password"
      />
      <input type="submit" name="valider" id="valider" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import fetchLogin from "../plugins/fetch";

const user = ref({
  username: "",
  password: "",
});

const handleSubmit = () => {
  fetchLogin(user.value);
};
</script>

<style></style>
