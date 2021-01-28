<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            :href="project.href"
            :raised="playPause(hover)"
            height="100%"
            class="d-flex flex-column text-left"
        >
            <v-card-title class="no-wrap" v-text="project.title" />
            <v-card-subtitle v-text="project.subtitle" />

            <v-img
                v-if="img"
                :src="project.src()"
                width="40%"
                class="align-self-center"
                contain
            />
            <div>
                <video
                    v-if="vid"
                    :src="project.src()"
                    ref="vid"
                    v-intersect="onIntersect"
                    loop
                    muted
                    playsinline
                    @mouseenter="playPause(true)"
                    @mouseleave="playPause(false)"
                />
            </div>
            <v-card-text class="text-justify" v-html="project.desc" />
        </v-card>
    </v-hover>
</template>

<script>
export default {
    name: "Project",
    props: { project: Object },
    data() {
        return { intersecting: false };
    },
    methods: {
        playPause(val) {
            if (this.$refs.vid) {
                try {
                    if (
                        (!this.small && val) ||
                        (this.small && this.intersecting)
                    ) {
                        this.$refs.vid.play();
                    } else {
                        this.$refs.vid.pause();
                    }
                } catch (e) {
                    // Don't handle exception for play/pause interruption
                }
            }
            return val;
        },

        onIntersect(entries) {
            this.intersecting = entries[0].isIntersecting;
            this.playPause();
        },
    },
    computed: {
        small() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        img() {
            return this.project.media === "img";
        },
        vid() {
            return this.project.media === "vid";
        },
    },
};
</script>

<style>
video {
    width: 100%;
    height: 100%;
}
</style>
