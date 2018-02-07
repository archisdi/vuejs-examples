<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers" @click="">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data:function () {
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

        }
    }
</script>

<style>

</style>
