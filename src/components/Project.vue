<template>
  <v-hover v-slot:default="{ isHovering }">
    <v-card
      :href="project.href"
      :raised="playPause(isHovering ?? false)"
      height="100%"
      class="d-flex flex-column text-left"
    >
      <v-card-title class="no-wrap" v-text="project.title" />
      <v-card-subtitle v-text="project.subtitle" />

      <v-img
        v-if="isImg"
        :src="project.src"
        width="40%"
        class="align-self-center mt-4"
        :class="{ invert: project.shouldInvert === true && isDark }"
        contain
      />
      <div>
        <video
          v-if="isVid"
          class="mt-4"
          :src="project.src"
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

<script lang="ts" setup>
import { Project } from "@/data/types";
import { computed } from "vue";
import { ref } from "vue";
import { PropType } from "vue";
import { useDisplay, useTheme } from "vuetify";

const { smAndDown } = useDisplay();
const { current: currentTheme } = useTheme();
const isDark = computed(() => currentTheme.value.dark);

let intersecting = false;

const props = defineProps({
  project: { type: Object as PropType<Project>, required: true },
});

const vid = ref<HTMLVideoElement>();

function playPause(val: boolean) {
  if (vid) {
    try {
      if ((!small.value && val) || (small.value && intersecting)) {
        vid.value?.play();
      } else {
        vid.value?.pause();
      }
    } catch (e) {
      // Don't handle exception for play/pause interruption
    }
  }
  return val;
}

function onIntersect(
  isIntersecting: boolean,
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  intersecting = entries[0].isIntersecting;
  playPause(false);
}

const small = computed(() => smAndDown.value);
const isImg = computed(() => props.project.media === "img");
const isVid = computed(() => props.project.media === "vid");
</script>

<style>
video {
  width: 100%;
  height: 100%;
}
</style>
