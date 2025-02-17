import Vue from 'vue'
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID }
  }, app.router);
}