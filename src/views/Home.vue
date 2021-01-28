<template>
    <div>
        <div v-for="(section, index) in sections" :key="index">
            <v-divider v-if="index != 0" />
            <component :is="section" class="py-5" :id="section" />
        </div>
    </div>
</template>

<script>
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Coursework from "@/views/Coursework.vue";

const components = { About, Projects, Coursework };
const sections = Object.keys(components);

export default {
    name: "Home",
    components,
    data: () => ({ sections }),
};
export { sections };
</script>
