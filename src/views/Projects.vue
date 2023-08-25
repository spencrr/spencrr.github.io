<template>
  <SectionBlock>
    <template #title>Coding Project Samples</template>
    <v-row class="justify-center">
      <v-col
        v-for="(project, index) in renderedProjects"
        :key="index"
        cols="12"
        sm="10"
        md="6"
        xl="4"
      >
        <Project :project="project" />
      </v-col>
    </v-row>
  </SectionBlock>
</template>

<script lang="ts" setup>
import Project from "@/components/Project.vue";
import SectionBlock from "@/components/SectionBlock.vue";
import projects from "@/data/projects";

const renderedProjects = projects({
  getAnchorTag(text, href) {
    return `<a target="_blank" rel="noreferrer" href=${href}>${text}</a>`;
  },
});
</script>
