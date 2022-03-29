<template>
  <div>
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ consultation.doctor_name }}</h5>
        <p class="card-text">date : {{ consultation.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useConsultationStore } from "../stores/consultation";
import { mapState } from "pinia";

export default {
  data() {
    return {
      consultation: {},
    };
  },
  mounted() {
    this.consultation = this.consults.find(
      (c) => String(c.id) === this.$route.params.id
    );
  },
  computed: {
    ...mapState(useConsultationStore, { consults: "consultations" }),
  },
};
</script>
