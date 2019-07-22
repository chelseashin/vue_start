import Vue from 'vue'
// component 파일
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h=> h(App)
// })
