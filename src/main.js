// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// AdminLTE
import './assets/adminlte/css/skins/_all-skins.min.css'
import './assets/adminlte/css/AdminLTE.min.css'
import './assets/adminlte/js/app.min.js'

// css
import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/css/ionicons.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
