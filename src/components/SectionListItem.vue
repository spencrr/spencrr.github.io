<template>
    <v-list-item @click="click">
        <v-list-item-content>
            <v-list-item-title v-text="section" />
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: "SectionListItem",
    props: {
        section: String,
    },
    methods: {
        click() {
            this.$vuetify.goTo(`#${this.section}`);
            this.$emit("click");
        },
    },
};
</script>
