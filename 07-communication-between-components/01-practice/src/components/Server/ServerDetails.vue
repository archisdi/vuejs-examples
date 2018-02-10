<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server id : {{ server.id }}</p>
        <p>Status : {{ server.status }}</p>
        <hr>
        <button @click="normalizeServer">Normalize</button>
    </div>
</template>

<script>
    import { eventBus } from '../../main';
    export default {
        data : () => {
            return {
                server : {
                    id : 'none',
                    status : 'none'
                }
            }
        },
        methods:{
          normalizeServer(){
              this.server.status = 'normal';
          }
        },
        created(){
            eventBus.$on('serverIsChanged', server => {
                this.server = server;
            })
        }
    }
</script>

<style>

</style>
