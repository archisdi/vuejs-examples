new Vue({
    el: '#exercise',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output() {
            console.log('computed')
            return this.secondCounter > 10 ? 'Greater than 10' : 'Less than 10';
        }
    },
    watch:{
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },2000);
        }
    },
    methods: {
        result() {
            console.log('method')
            return this.counter > 10 ? 'Greater than 10' : 'Less than 10';
        }
    }
});