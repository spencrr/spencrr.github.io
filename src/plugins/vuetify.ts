import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// import colors from "vuetify/lib/util/color";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          // primary: "#1867C0",
          // secondary: "#5CBBF6",
          accent: "#1976d2",
        },
      },
      dark: {
        dark: true,
        colors: {
          accent: "#1976d2",
        },
      },
    },
  },
});
