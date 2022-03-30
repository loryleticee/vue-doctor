<template>
  <div class="d-flex flex-wrap overflow-scroll">
    <div v-for="consult in storedConsults" :key="consult['@id']">
      <div class="card" style="width: 18rem">
        <img src="https://place-hold.it/300" class="card-img-top" alt="https://place-hold.it/300" />
        <div class="card-body">
          <h5 class="card-title">{{ consult.doctor_name }}</h5>
          <p class="card-text">date : {{ consult.date }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import { useUserStore } from "../stores/token";
import { useConsultationStore } from "../stores/consultation";
import monMixin from "../mixins/fetch";

export default {
  mixins: [monMixin],
  mounted() {
    this.fetchConsults().then((consultsDatas) => {
      console.log(consultsDatas);
      this.storedConsults = consultsDatas["hydra:member"];
    }).catch(()=> {
      console.log("TTTTT");
    })
  },
  computed: {
    // ACTION
    ...mapState(useUserStore, ["getToken"]),
    ...mapWritableState(useConsultationStore, {
      storedConsults: "consultations",
    }),
  },
};
</script>
