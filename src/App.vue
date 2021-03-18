<template>
  <v-app>
    <v-app-bar app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span>FROZENEON</span>
      </v-toolbar-title>

      <v-text-field
        v-model.trim="searchField"
        flat
        solo-inverted
        hide-details
        clearable
        append-icon="mdi-magnify"
        label="Search packages"
        @click:append="getPackage"
        @keyup.enter="getPackage"
        @input="searchOnInput"
      ></v-text-field>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        <a href="https://github.com/Oksnard" target="_blank"
          >github.com/Oksnard</a
        >
        —
        <strong>Прохоров Семён</strong>
      </v-col>
    </v-footer>

    <Notification :options="options" />
  </v-app>
</template>

<script>
import Notification from "@/components/Notification";

export default {
  name: "App",

  components: {
    Notification,
  },

  data: () => ({
    searchField: "",
    options: {},
    debounce: null,
  }),

  created() {
    this.getPackage();
  },

  methods: {
    getPackage() {
      this.$http.get("/stats/packages").then((res) => {
        res.data.length
          ? this.$store.dispatch(
              "GET_PACKAGES",
              this.searchField
                ? res.data.filter((p) =>
                    p.name.includes(this.searchField.toLowerCase())
                  )
                : res.data.filter((p) => !p.name.includes("/"))
            )
          : (this.options = {
              timeout: "2000",
              isShow: true,
              text: "Запрос не привел к получению данных",
            });
      });
    },

    searchOnInput() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.getPackage();
      }, 600);
    },
  },
};
</script>
