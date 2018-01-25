new Vue({
    el: '#exercise',
    data: {
        attachRed: false,
        color: ''
    },
    computed: {
        myStyle() {
            return { 'background-color': this.color };
        }
    }
});