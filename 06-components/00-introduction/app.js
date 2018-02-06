// Vue.component('my-cmp', {
//   data: function () {
//     return {
//       status: 'critical'
//     }
//   },
//   template: `<p>Server Status : {{status}}, <button @click='changeStatus'>Change</button> </p>`,
//   methods:{
//     changeStatus(){
//       this.status = 'Normal';
//     }
//   }
// });

var component = {
  data: function () {
    return {
      status: 'critical'
    }
  },
  template: `<p>Server Status : {{status}}, <button @click='changeStatus'>Change</button> </p>`,
  methods: {
    changeStatus() {
      this.status = 'Normal';
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'my-cmp': component 
  }
})

new Vue({
  el: '#app2',
})