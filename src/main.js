import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import VueSession from 'vue-session'
import Vuelidate from 'vuelidate'
import i18n from '@/plugins/i18n'
import { BootstrapVue } from 'bootstrap-vue'
import store from "./store";



import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown, faSlidersH, faChild, faServer} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faChevronRight, faChevronDown, faSlidersH, faChild, faServer);


import '@/assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueSession)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)


new Vue({
  router, store,
  
  
  render: h => h(App),
 
  i18n
}).$mount('#app')