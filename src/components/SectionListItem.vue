<template>
  <v-list-item @click="click">
    <v-list-item-title v-text="section" />
  </v-list-item>
</template>

<script lang="ts" setup>
const props = defineProps({ section: { type: String, required: true } });

const emit = defineEmits(["click"]);

function click() {
  if (props.section) {
    document
      .getElementById(props.section)
      ?.scrollIntoView({ behavior: "smooth" });
  }
  emit("click");
}
</script>
