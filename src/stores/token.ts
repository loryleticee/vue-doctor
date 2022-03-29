import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "token",
  state: () => ({
    token: "",
    refresh_token: "",
  }),
  persist: true,
  getters: {
    getToken: (state) => state.token,
    getRefreshToken: (state) => state.refresh_token,
  },
  actions: {
    setToken(tk: string) {
      this.token === tk;
    },
    setRefreshToken(rtk: string) {
      this.token === rtk;
    },
  },
});
