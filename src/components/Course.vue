<template>
  <v-expansion-panel>
    <v-expansion-panel-header
      ripple
      class="font-weight-medium"
      hide-actions
      v-text="course.title"
    />
    <v-expansion-panel-content v-text="course.display" />
    <v-expansion-panel-content v-text="course.description" />
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
      required: true,
    },
  },
});
</script>
