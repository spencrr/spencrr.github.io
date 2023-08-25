<template>
  <SectionBlock>
    <template #title>Relevant Coursework</template>
    <v-row align="center" justify="center">
      <v-col cols="8" lg="2">
        <v-select
          :items="sortOptions"
          v-model="selectedIndex.index"
          label="Sort By"
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

<script lang="ts" setup>
import SectionBlock from "@/components/SectionBlock.vue";
import Course from "@/components/Course.vue";

import courses, { sorts } from "@/data/courses";
import { computed, reactive } from "vue";

const sortOptions = Array.from(sorts).map((sort, index) => ({
  title: sort.display,
  value: index,
}));

let selectedIndex = reactive({ index: 0 });

const sortedCourses = computed(() => {
  return Array.from(courses).sort(sorts[selectedIndex.index].compareTo);
});
</script>
