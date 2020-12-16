<template>
  <v-app>
    <v-navigation-drawer app right v-model="drawer" temporary>
      <v-list>
        <SectionListItem
          v-for="(section, index) in sections"
          :key="index"
          :section="section"
          @click="toggleDrawer()"
        />
      </v-list>
      <v-list v-if="linksInDrawer">
        <LinkListItem
          v-for="(link, index) in links"
          :key="index"
          :link="link"
          :src="getSrc"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="text-uppercase font-weight-bold">
      <v-spacer v-if="linksInDrawer" />
      <v-toolbar-title>
        <router-link to="/" class="link">Spencer Schoenberg</router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items v-if="!linksInDrawer" class="links">
        <LinkIcon
          v-for="(link, index) in links"
          :key="index"
          :link="link"
          :src="getSrc"
        />
      </v-toolbar-items>
      <v-app-bar-nav-icon
        aria-label="Navigation Menu"
        @click.stop="toggleDrawer()"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row justify="center" align="center" no-gutters>
          <v-col md="11" cols="12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app color="accent" class="d-flex justify-center">
      <div>
        <span class="white--text">Developed in WI</span>
        <DarkModeButton />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import LinkIcon from "@/components/LinkIcon.vue";
import LinkListItem from "@/components/LinkListItem.vue";
import SectionListItem from "@/components/SectionListItem.vue";
import DarkModeButton from "@/components/DarkModeButton.vue";

import { sections } from "@/views/Home.vue";
import links from "@/data/links";

export default {
  name: "App",
  components: { LinkIcon, LinkListItem, SectionListItem, DarkModeButton },
  data: () => ({
    drawer: false,
    links,
    sections,
  }),
  methods: {
    getSrc(link) {
      return require(`@/assets/${link.src}`);
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  computed: {
    linksInDrawer() {
      return this.$vuetify.breakpoint.xs;
    },
  },
};
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
</style>
