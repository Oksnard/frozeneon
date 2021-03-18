<template>
  <v-container class="mt-10 mb-16">
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="packages"
          :items-per-page="10"
          class="elevation-1"
          @click:row="showPackageInfo"
        ></v-data-table>
      </v-col>
    </v-row>

    <Dialog
      :isShow="isShow"
      :packageInfo="packageInfo"
      @closeModal="closeModal"
    />
  </v-container>
</template>

<script>
import Dialog from "@/components/Dialog";

export default {
  name: "Table",

  components: {
    Dialog,
  },

  data: () => ({
    headers: [
      {
        text: "Package type",
        align: "start",
        sortable: true,
        value: "type",
      },
      { text: "Package name", value: "name" },
      { text: "Package hits", value: "hits" },
    ],

    packageInfo: null,
    isShow: false,
  }),

  computed: {
    packages() {
      return this.$store.getters.PACKAGES;
    },
  },

  methods: {
    showPackageInfo($event) {
      this.$http.get(`/package/npm/${$event.name}/stats`).then((res) => {
        this.packageInfo = res.data;
        this.packageInfo.name = $event.name;
        this.isShow = true;
      });
    },

    closeModal($event) {
      this.isShow = $event;
    },
  },
};
</script>
