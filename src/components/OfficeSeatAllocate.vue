<template>
  <v-container>
    <v-btn @click="goToOfficeMembers">Go to Member Detail</v-btn>
    <v-data-table
      :sort-by="sortBy"
      :headers="headers"
      :items="items"
      :items-per-page="5"
    ></v-data-table>
  </v-container>
</template>

<script>
import api from "@/api/index";

export default {
  components: {},
  data() {
    return {
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
  mounted() {
    api
      .get("/getSeatList")
      .then((response) => {
        this.seatList = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    api
      .get("/getMemberList")
      .then((response) => {
        this.memberList = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    addSeat() {
      console.log(this.seatList.length);
      const seat = { seatNo: this.seatList.length + 1 };
      api
        .post("/addSeat", seat)
        .then((response) => {
          this.seatList = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.error("Error add data:", error);
        });
    },
    addMember() {
      const member = { name: this.newMemberName };
      api
        .post("/addMember", member)
        .then((response) => {
          this.memberList = response.data;
        })
        .catch((error) => {
          console.error("Error add data:", error);
        });
    },
    goToOfficeMembers() {
      console.log(this.$router.options.routes);

      this.$router.push({ name: 'OfficeMembers' });
      console.log(this.$router);

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
