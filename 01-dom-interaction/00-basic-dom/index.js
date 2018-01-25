new Vue({
    el: '#app',
    data: {
        message: 'Hola World',
        link: 'http://google.com',
        finished_link: '<a href="http://google.com">link</a>'
    },
    methods:{
        say_hello: function(){
            this.message = 'holaa'
            return this.message;
        }
    }
});