import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Required for Vuetify 3 styles
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons CSS



const vuetify = createVuetify({
  // Optional: Customize options
  theme: {
    defaultTheme: 'light', // or 'dark'
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;