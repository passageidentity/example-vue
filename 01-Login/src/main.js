import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Banner from './components/Banner.vue'

createApp(App)
  .use(router)
  .component('Banner', Banner)
  .mount('#app')
