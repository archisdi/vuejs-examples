import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-resource-ac53e.firebaseio.com/data.json';

Vue.http.interceptors.push((req, next) => {
    console.log(req);
    next(response => {
      console.log(response);
    });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
