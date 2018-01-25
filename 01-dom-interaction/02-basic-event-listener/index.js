new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        up_counter(step, event) {
            this.counter += step;
        },
        update_coor(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alert_me(){
            this.counter = 666
        }
    }
})