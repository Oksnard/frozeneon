<template>
  <v-snackbar v-model="options.isShow" :timeout="options.timeout">
    {{ options.text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="options.isShow = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Notification",

  props: ["options"],
};
</script>

<style scoped></style>
