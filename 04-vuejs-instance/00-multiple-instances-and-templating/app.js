var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('hello',{
  template: `<h1>Hello</h1>`
})

var vm1 = new Vue({
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.showButton.innerText = 'Test';
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app'); // Mounting Manually

console.log(data === vm1.$data);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'the second instance'
  },
  methods: {
    onChange() {
      vm1.title = 'Changed !!'; // Change other instance property
    }
  }
})


var vm3 = new Vue({
  el: '#app3',
  template: `<h1>Hellow</h1>`
})
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);