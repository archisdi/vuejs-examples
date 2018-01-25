new Vue({
    el: '#app',
    data: {
        message: 'Hello World'
    },
    methods: {
        change_message: function (event) {
            this.message = event.target.value;
        }
    }
});