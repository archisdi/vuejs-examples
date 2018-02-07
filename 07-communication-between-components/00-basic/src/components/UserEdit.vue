<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>User Age : {{ userAge }}</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props:[ 'userAge' ],
        methods:{
            editAge(){
                this.userAge = 22;
                // this.$emit('resetAge',this.userAge); // regular event emmiter
                // eventBus.$emit('resetAge', this.userAge); // event bus emmiter
                eventBus.changeAge(this.userAge); // event emmiter with methods
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
