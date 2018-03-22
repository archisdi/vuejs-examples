<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded with id: {{ $route.params.id }}</p>
        <router-link class="btn btn-primary" tag="button" :to="link">Edit</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "user_edit",
        params: { id: this.$route.params.id },
        query: { size: 10 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next){
      console.log('user detail from components')
      next();
  }
};
</script>
