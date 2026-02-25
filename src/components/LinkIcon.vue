<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ props }">
      <v-btn
        variant="text"
        fab
        rel="noreferrer"
        :href="link.href"
        target="_blank"
        v-on="props"
      >
        <v-img
          :src="link.src"
          :alt="link.title"
          height="30px"
          width="30px"
          aspect-ratio="1"
          contain
          :class="{ invert: isDark() }"
        ></v-img>
      </v-btn>
    </template>
    <span v-text="link.title" />
  </v-tooltip>
</template>

<script lang="ts" setup>
import type { Link } from "@/data/types";
import { useTheme } from "vuetify";

const { current: currentTheme } = useTheme();

const isDark = () => currentTheme.value.dark;

defineProps<{
  link: Link;
}>();
</script>
