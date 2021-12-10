import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createApp } from 'vue'

import vuetify from '@/plugins/vuetify'

// import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'
import router from './router'
import store from './store'

// loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
