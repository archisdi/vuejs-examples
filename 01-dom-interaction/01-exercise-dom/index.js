new Vue({
    el: '#exercise',
    data: {
        name: 'isdiningrat',
        age: 22,
        image: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABDCPeFopyQ2ebiASILdmNhcmRfcGhvdG8qKDQ1Y2RiOGMxZWNjNTU4ZTEzNTJmYmE5OWE1NzljZWY2MTQxOGQ1ZjUwAU53ybXyIgElBkknxhgvZIi6W74U?sz=128'
    },
    methods:{
        get_random_number: function(){
            return Math.random()
        }
    }
})