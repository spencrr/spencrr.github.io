<template>
  <v-expansion-panel>
    <v-expansion-panel-title ripple class="font-weight-medium" hide-actions>{{
      course.title
    }}</v-expansion-panel-title>
    <v-expansion-panel-text>
      <p v-if="course.display">{{ course.display }}</p>
      <p>{{ course.description }}</p>
      <p>{{ course.relevancy.display }}</p>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
import { Course } from "@/data/types";

defineProps({
  course: {
    type: Object as () => Course,
    required: true,
  },
});
</script>
