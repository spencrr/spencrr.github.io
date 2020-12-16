import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons: { iconfont: "mdiSvg" },
    theme: {
        themes: {
            light: {
                accent: colors.blue.darken2,
            },
        },
    },
});
