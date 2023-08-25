<template>
    <SectionBlock class="text-center">
        <v-row class="flex-wrap-reverse">
            <v-col align-self="stretch" class="d-flex flex-column">
                <v-row>
                    <v-col cols="12">
                        <h1 id="typed-panel">
                            I am a
                            <br />
                            <span id="typed"></span>
                        </h1>
                    </v-col>
                    <v-col cols="12">
                        <v-btn
                            rel="noreferrer"
                            :href="resume.href"
                            target="_blank"
                            class="ma-3"
                            color="accent"
                            x-large
                            >Résumé</v-btn
                        >
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="6">
                <v-row no-gutters justify="center">
                    <v-col cols="9" md="6">
                        <v-img contain class="rounded" :src="portrait.src" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </SectionBlock>
</template>

<script>
import SectionBlock from "@/components/SectionBlock.vue";
import Typed from "typed.js";

export default {
    name: "About",
    components: { SectionBlock },
    data() {
        return {
            resume: {
                href: "./resume",
            },
            portrait: { src: require("@/assets/me.jpg") },
        };
    },
    mounted() {
        this.typed = new Typed("#typed", {
            strings: [
                "Researcher",
                "Computer Scientist",
                "Machine Learning Aficionado",
                "Developer",
                "Photographer",
                "Music Enthuiastic",
                "Hiker",
                "Nature Explorer",
                "Rocketry Fan",
            ],
            typeSpeed: 30,
            backSpeed: 30,
            startDelay: 0,
            backDelay: 1500,
            loop: true,
            shuffle: true,
            smartBackspace: false,
        });
    },
};
</script>

<style scoped>
.rounded {
    border-radius: 5px;
}

#typed-panel {
    height: 4em;
}
</style>
