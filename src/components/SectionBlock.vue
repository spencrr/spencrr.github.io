<template>
  <v-container fluid class="d-flex flex-column align-center">
    <h1 class="text-center">
      <slot name="title" />
    </h1>
    <v-container fluid>
      <slot />
    </v-container>
  </v-container>
</template>
