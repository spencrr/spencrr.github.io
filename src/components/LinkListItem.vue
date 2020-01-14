<template>
  <v-list-item :href="link.href" target="_blank">
    <v-list-item-icon>
      <v-img
        :src="this.src(link)"
        :alt="link.title"
        height="24px"
        aspect-ratio="1"
        contain
        :class="{ invert: $vuetify.theme.dark }"
      />
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="link.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "LinkListItem",
  props: { link: Object, src: Function, invert: Boolean },
};
</script>
