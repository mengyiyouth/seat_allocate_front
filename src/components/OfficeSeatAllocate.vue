<template>
  <v-container>
    <v-btn @click="showMembers = !showMembers">{{
      showMembers ? "Show Seats Allocate" : "Show Members"
    }}</v-btn>
    <component :is="currentComponent"></component>
    <v-data-table
      v-if="!showMembers"
      :sort-by="sortBy"
      :headers="headers"
      :items="items"
      :items-per-page="5"
    ></v-data-table>
  </v-container>
</template>

<script>
import OfficeMembers from "@/components/OfficeMembers.vue";
export default {
  components: {},
  data() {
    return {
      showMembers: false,
      sortBy: [{ key: "Monday", direction: "asc" }],
      headers: [
        {
          align: "start",
          key: "",
          sortable: false,
          title: "",
        },
        { title: "Monday", key: "Monday", align: "center" },
        { title: "Tuesday", key: "Tuesday", align: "center" },
        { title: "Wednesday", key: "Wednesday", align: "center" },
        { title: "Thursday", key: "Thursday", align: "center" },
        { title: "Friday", key: "Friday", align: "center" },
      ],
      items: [
        {
          Monday: "BigFatty",
          Tuesday: "SmallFatty",
          Wednesday: "SmartEgg",
          Thursday: "HH",
          Friday: "JS",
        },
        {
          Monday: "John",
          Tuesday: "8Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },

        {
          Monday: "2John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },

        {
          Monday: "3John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
        {
          Monday: "John",
          Tuesday: "Doe",
          Wednesday: "Smith",
          Thursday: "Smith",
          Friday: "Smith",
        },
      ],
      dayList: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      seatList: [],
      memberList: [],
      newMemberName: "",
    };
  },
  mounted() {},
  methods: {
    goToOfficeMembers() {
      console.log(this.$router.options.routes);

      this.$router.push({ name: "OfficeMembers" });
      console.log(this.$router);
    },
  },
  computed: {
    currentComponent() {
      return this.showMembers ? OfficeMembers : null;
    },
  },
};
</script>

<!-- <style scoped>
/* Your styles here */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
