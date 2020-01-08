<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :href="project.href"
      :raised="playPause(hover)"
      height="100%"
      class="d-flex flex-column text-left no-wrap"
    >
      <v-card-title class="no-wrap">{{ project.title }}</v-card-title>
      <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
      <v-img v-if="project.img" :src="project.img()"></v-img>
      <div>
        <video
          v-if="project.vid"
          :src="project.vid()"
          ref="vid"
          v-intersect="onIntersect"
          loop
          muted
          :playinline="small"
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
        let isSmall = this.small;
        if ((!isSmall && val) || (isSmall && this.intersecting)) {
          this.$refs.vid.play();
        } else {
          this.$refs.vid.pause();
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
  },
};
</script>

<style>
video {
  width: 100%;
  height: 100%;
}
</style>
