new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert_me() {
            alert('button clicked')
        },
        store_value(event){
            this.value = event.target.value;
        }
    }
});