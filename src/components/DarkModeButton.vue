<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-icon
        v-on="on"
        v-bind:aria-label="buttonText"
        @click="toggleDark"
        class="glow mx-2"
        color="white"
      >
        {{ mdiDesktopMac }}
      </v-icon>
    </template>
    <span>{{ buttonText }}</span>
  </v-tooltip>
</template>

<script>
import { mdiDesktopMac } from "@mdi/js";
const buttonText = "Super Secret Dark Mode 😉";

export default {
    name: "DarkModeButton",
    data: () => ({ mdiDesktopMac, buttonText }),
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
