<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn text fab :href="link.href" target="_blank" v-on="on">
        <v-img
          :src="src(link)"
          :alt="link.title"
          height="24px"
          aspect-ratio="1"
          contain
          :class="{ invert: $vuetify.theme.dark }"
        ></v-img>
      </v-btn>
    </template>
    <span>{{ link.title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "LinkIcon",
  props: { link: Object, src: Function, invert: Boolean },
};
</script>
