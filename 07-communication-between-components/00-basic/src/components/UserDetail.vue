<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{ switchName() }}</p>
        <p>User Age : {{ userAge }}</p>
        <button @click="resetFn()">Reset</button> <!-- reset with callback function -->
        <button @click="resetName">Reset</button> <!-- reset with custom event -->
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default{
        props:{
            name: {
                type: String,
                // required: true,
                default: 'Anonymous'
            },
            userAge : Number,
            resetFn : Function // callback function
        },
        methods:{
            switchName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){ // custom event emmiter
                this.name = 'Archie';
                this.$emit('resetName', this.name);
            }
        },
        created(){
            eventBus.$on('resetAge', age => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
