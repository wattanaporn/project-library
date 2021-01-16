import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue2Filters from 'vue2-filters'
import VueBarcode from 'vue-barcode'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vue2Filters);
Vue.component('barcode', VueBarcode)

Vue.filter('ChangeName', function(value) {
  if (value == 'admin') {
    return 'แอดมิน'
  }else if (value == 'librarian'){
    return 'บรรณารักษ์'
  }else if (value == 'personnel'){
    return 'บุคลากร'
  }else if (value == 'student'){
    return 'นักเรียน'
  }
});

