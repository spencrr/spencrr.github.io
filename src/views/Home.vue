<template>
  <div>
    <div v-for="(component, name, index) in components" :key="index">
      <v-divider v-if="index != 0" />
      <component :is="component" class="py-5" :id="name" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Coursework from "@/views/Coursework.vue";

const components = { About, Projects, Coursework };
</script>

<script lang="ts">
const sections = Object.keys({ About, Projects, Coursework });
export { sections };
</script>
