<template>
  <div class="bg-light d-flex flex-wrap">
    <form @submit.prevent="handleSubmit" class="d-flex flex-column p-5 gap-2">
      <label for="username"> Nom d'utilisateur </label>
      <input
        type="text"
        v-model="user.username"
        name="username"
        id="username"
        placeholder="username"
      />
      <label for="username"> Mot de passe </label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="user.password"
        placeholder="password"
      />
      <input class="btn btn-primary text-light border-dark" type="submit" name="valider" id="valider" value="Se connecter" />
    </form>
  </div>
</template>

<script>
import MonMixin from "../mixins/fetch";
import { mapState, mapWritableState } from "pinia";
import { useUserStore } from "../stores/token";

export default {
  mixins: [MonMixin],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    // ACTION
    ...mapWritableState(useUserStore, ["token", "refresh_token"]),
    ...mapState(useUserStore, ["getToken", "getRefreshToken"]),
  },
  methods: {
    handleSubmit() {
      this.fetchLogin(this.user).then((credentials) => {
        this.token = credentials?.token;
        this.refresh_token = credentials?.refresh_token;

        this.$router.push("consultations");
      });
    },
  },
};
</script>

<style></style>
