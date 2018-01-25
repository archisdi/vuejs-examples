new Vue({
    el: '#exercise',
    data: {
        attachRed: false,
        color: ''
    },
    computed:{
        divClass(){
            return { red : this.attachRed, blue: !this.attachRed  };
        }
    }
});