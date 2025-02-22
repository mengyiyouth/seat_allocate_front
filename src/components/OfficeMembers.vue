<template>
  <v-card title="Members" flat>
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
    <v-data-table :items="memberList" :headers="headers" :search="search">
    </v-data-table>
  </v-card>
</template>

<script>
import { getMemberList } from "@/api/index";

export default {
  data() {
    return {
      memberList: [],
      headers: [
        { title: "ID", key: "id", align: "center" },
        { title: "Name", key: "name", align: "center" },
      ],
      search: "",
    };
  },
  components() {},
  mounted() {
    this.fetchMemberList();
  },
  methods: {
    fetchMemberList() {
      getMemberList()
        .then((response) => {
          this.memberList = response.data;
        })
        .catch((err) => {
          console.log("Error fetching member list ", err);
        });
    },
  },
};
</script>
