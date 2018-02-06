import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Body from './Body.vue'

Vue.component('top', Header);
Vue.component('server-monitor', Body);
Vue.component('bottom', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
