import { defineStore } from "pinia";

export const useConsultationStore = defineStore({
  id: "consultations",
  state: () => ({
    consultations: [],
  }),
  persist: true,
  getters: {
    getConsultations: (state) => state.consultations,
  },
  actions: {},
});
