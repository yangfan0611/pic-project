import Vue from 'vue'
// import ElementUI from 'element-ui'

// import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
// import './api/index'

// Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
