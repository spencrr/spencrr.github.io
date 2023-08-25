<template>
  <v-tooltip location="top" :text="buttonText">
    <template v-slot:activator="{ props }">
      <v-icon
        :icon="mdiHeart"
        v-bind="props"
        @click="toggleDark"
        class="glow mx-2"
        color="white"
      />
    </template>
  </v-tooltip>
</template>

<script lang="ts" setup>
import { mdiHeart } from "@mdi/js";
import { useTheme } from "vuetify/lib/framework.mjs";
const buttonText = "Super Secret Dark Mode 😉";

const { global: globalTheme } = useTheme();

function toggleDark() {
  globalTheme.name.value = globalTheme.current.value.dark ? "light" : "dark";
}
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
