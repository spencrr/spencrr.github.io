<template>
  <v-expansion-panel>
    <v-expansion-panel-header ripple class="font-weight-medium" hide-actions>{{ course.title }}</v-expansion-panel-header>
    <v-expansion-panel-content>
      <p v-if="course.display">{{ course.display }}</p>
      <p>{{ course.description }}</p>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import { Course } from "@/data/courses";
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "Course",
  props: {
    course: {
      type: Object as () => PropType<Course>,
      required: true
    }
  }
});
</script>
