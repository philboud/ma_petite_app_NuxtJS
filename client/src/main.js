import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Swal from 'sweetalert2'
import VueZoomer from 'vue-zoomer'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueZoomer)
window.Swal = Swal

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
