import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

import './assets/app.css'








import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'

Vue.use(BootstrapVue)

Vue.use(Buefy);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
