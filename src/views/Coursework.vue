<template>
  <SectionBlock>
    <template #title>Relevant Coursework</template>
    <v-row align="center" justify="center">
      <v-col cols="8" lg="2">
        <v-select
          :items="sorts"
          label="Sort By"
          v-model="selectedSort"
        ></v-select>
      </v-col>
      <v-col cols="12" lg="10">
        <v-expansion-panels multiple popout>
          <Course
            v-for="(course, index) in sortedCourses"
            :key="index"
            :course="course"
          />
        </v-expansion-panels>
      </v-col>
    </v-row>
  </SectionBlock>
</template>

<script>
import Vue from "vue";
import SectionBlock from "@/components/SectionBlock.vue";
import Course from "@/components/Course.vue";

import courses, { sorts } from "@/data/courses";

export default Vue.extend({
  name: "Coursework",
  components: { SectionBlock, Course },
  data() {
    return {
      courses,
      sorts: sorts.map((v, i) => ({ text: v.display, value: i })),
      selectedSort: null,
    };
  },
  computed: {
    sortedCourses() {
      if (this.selectedSort == null) return this.courses;
      return Array.from(this.courses).sort(sorts[this.selectedSort].compareTo);
    },
  },
});
</script>
