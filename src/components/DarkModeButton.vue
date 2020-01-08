<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-icon
        v-on="on"
        @click="toggleDark"
        class="glow mx-2"
        color="secondary"
        >{{ mdiDesktopMac }}</v-icon
      >
    </template>
    <span>Super Secret Dark Mode 😉</span>
  </v-tooltip>
</template>

<script>
import { mdiDesktopMac } from "@mdi/js";

export default {
  name: "DarkModeButton",
  data: () => ({ mdiDesktopMac }),
  methods: {
    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style>
.glow {
  animation: beat 1s ease-in-out infinite alternate;
}

@keyframes beat {
  to {
    transform: scale(1.25);
  }
}
</style>
