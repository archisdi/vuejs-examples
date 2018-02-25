<template>
  <div>
      <h1>New component</h1>
    <button @click="counter++">Add</button>
    {{ counter }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  deactivated(){
      console.log('deactivated');
  },
  activated(){
      console.log('activated');
  }
};
</script>

<style>

</style>
