// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// css
import './assets/adminbsb/css/google_fonts/google_fonts.css'
import './assets/adminbsb/css/google_fonts/googleapi_material_icon.css'

import './assets/adminbsb/plugins/node-waves/waves.css'
import './assets/adminbsb/plugins/node-waves/waves.js'
import './assets/adminbsb/plugins/animate-css/animate.css'

import './assets/adminbsb/plugins/jquery-slimscroll/jquery.slimscroll.js'

import './assets/adminbsb/css/style.css'
import './assets/adminbsb/css/themes/all-themes.css'
import './assets/adminbsb/js/admin.js'

import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next() // 确保要调用 next 方法，否则钩子就不会被 resolved。
})

router.afterEach(route => {
  store.commit('updateRoute', route) // 更新store中的route状态
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
