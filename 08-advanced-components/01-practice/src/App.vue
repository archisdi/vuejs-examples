<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selected = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selected = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selected = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selected">
                    <h1> Holaaaa, {{selected}} is selected </h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data(){
            return{
                selected: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
