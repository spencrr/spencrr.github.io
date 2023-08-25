<template>
  <v-list-item
    rel="noreferrer"
    :href="link.href"
    target="_blank"
    class="d-flex flex justify-space-between"
  >
    <v-list-item-title v-text="link.title" />
    <template v-slot:append>
      <v-img
        :src="link.src"
        :alt="link.title"
        width="24px"
        height="24px"
        :class="{ invert: isDark() }"
      />
    </template>
  </v-list-item>
</template>

<script lang="ts" setup>
import { Link } from "@/data/types";
import { PropType } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const { current: currentTheme } = useTheme();
const isDark = () => currentTheme.value.dark;

defineProps({
  link: { type: Object as PropType<Link>, required: true },
});
</script>
