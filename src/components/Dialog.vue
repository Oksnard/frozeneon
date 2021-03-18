<template>
  <div class="text-center">
    <v-dialog v-model="isShow" width="500">
      <v-card v-if="packageInfo">
        <v-card-title class="headline grey lighten-2">
          {{ packageInfo.name }}
        </v-card-title>

        <v-card-text class="mt-5">
          <ul>
            <li><b>Rank:</b> {{ packageInfo.rank }}</li>
            <li><b>Total:</b> {{ packageInfo.total }}</li>
            <li>
              <b>Versions:</b>
              <span v-for="(version, i) in packageInfo.versions" :key="i">
                {{ i }} /
              </span>
            </li>
          </ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('closeModal', false)">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",

  props: ["isShow", "packageInfo"],
};
</script>
