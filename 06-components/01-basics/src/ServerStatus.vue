<template>
  <div>
    <p>Server Status : {{ message }}</p> 
    <hr>
    <button @click="changeStatus">Change</button>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      status: true
    };
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
    }
  },
  computed: {
    message() {
      return this.status ? "normal" : "critical";
    }
  }
};
</script>
