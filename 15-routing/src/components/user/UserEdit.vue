<template>
    <div>
        <h3>Edit the User</h3>
        <p>Size : {{this.$route.query.size}}</p>
        <br>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <br><br>
    </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    if (this.confirmed){
        next();
    }else{
        if(confirm('Are you sure ?')){
            next();
        }else{
            next(false);
        }
    }
  }
};
</script>
