<template>
  <v-card title="Seats" flat>
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-data-table :items="seatList" :headers="headers" :search="search">
    </v-data-table>
  </v-card>
</template>

<script>
import { getSeatList } from "@/api/index";

export default {
  components: {},
  data() {
    return {
      search: "",
      headers: [{ title: "No", key: "seatNo", align: "center" }],
      seatList: [],
    };
  },
  mounted() {
    this.fetchSeatList();
  },
  methods: {
    async fetchSeatList() {
      try {
        const response = await getSeatList();
        this.seatList = response.data;
        console.log("Seat list ", this.seatList);

      } catch (err) {
        console.log("Error fetching seat list ", err);
      }
    },
  },
};
</script>
