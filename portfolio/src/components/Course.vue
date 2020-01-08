<template>
  <v-expansion-panel>
    <v-expansion-panel-header ripple class="font-weight-medium" hide-actions>{{
      course.title
    }}</v-expansion-panel-header>
    <v-expansion-panel-content>{{ course.desc }}</v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "Course",
  props: { course: Object },
};
</script>
