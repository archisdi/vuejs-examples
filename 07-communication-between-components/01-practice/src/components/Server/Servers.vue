<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers" @click="changeServer(server)">
                Server #{{ server.id }} - {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main';
    export default {
        data:() => {
          return {
              servers:[
                  { id: 1, status:'critical'},
                  { id: 2, status:'normal'},
                  { id: 3, status:'critical'},
                  { id: 4, status:'critical'},
                  { id: 5, status:'normal'}
              ]
          }
        },
        methods:{
            changeServer(server){
                eventBus.changeServer(server);
            }
        }
    }
</script>

<style>

</style>
