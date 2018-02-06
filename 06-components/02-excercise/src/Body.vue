<template>
  <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-status></server-status>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  components: {
    //  ServerStatus
    // ServerStatus : ServerStatus
    "server-status": ServerStatus
  }
};
</script>

<style scoped>
div {
    border: 1px solid blue
}
</style>