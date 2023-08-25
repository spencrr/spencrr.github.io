<template>
  <v-app>
    <v-navigation-drawer temporary location="right" v-model="drawer.active">
      <v-list>
        <SectionListItem
          v-for="(section, index) in sections"
          :key="index"
          :section="section"
          @click="toggleDrawer()"
        />
      </v-list>
      <v-divider v-if="linksInDrawer" />
      <v-list v-if="linksInDrawer">
        <LinkListItem
          v-for="(link, index) in links"
          :key="index"
          :link="link"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :class="{ blur: !isDark() }" id="app-bar">
      <v-toolbar-title class="text-uppercase font-weight-bold">
        Spencer Schoenberg
      </v-toolbar-title>
      <v-spacer v-if="!linksInDrawer" />
      <v-toolbar-items v-if="!linksInDrawer" class="links">
        <LinkIcon v-for="(link, index) in links" :key="index" :link="link" />
      </v-toolbar-items>
      <v-app-bar-nav-icon
        aria-label="Navigation Menu"
        @click.stop="toggleDrawer()"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row justify="center" align-content="center" no-gutters>
          <v-col md="11" cols="12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app color="accent" class="justify-center">
      <span class="white--text">Developed with</span>
      <DarkModeButton />
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import LinkIcon from "@/components/LinkIcon.vue";
import LinkListItem from "@/components/LinkListItem.vue";
import SectionListItem from "@/components/SectionListItem.vue";
import DarkModeButton from "@/components/DarkModeButton.vue";

import { sections } from "@/views/Home.vue";
import links from "@/data/links";
import { useDisplay, useTheme } from "vuetify/lib/framework.mjs";
import { computed, reactive } from "vue";

const { xs } = useDisplay();
const { current: currentTheme } = useTheme();

let drawer = reactive({ active: false });

function toggleDrawer() {
  drawer.active = !drawer.active;
}
const isDark = () => currentTheme.value.dark;

const linksInDrawer = computed(() => xs.value);
</script>

<style>
.invert {
  filter: invert(1);
}

.no-wrap {
  word-break: break-word;
}
</style>

<style scoped>
.link {
  text-decoration: inherit;
  color: inherit;
  overflow: hidden;
}

#app-bar.blur {
  backdrop-filter: saturate(2) blur(8px);
  background-color: rgba(255, 255, 255, 0.65);
}
</style>
