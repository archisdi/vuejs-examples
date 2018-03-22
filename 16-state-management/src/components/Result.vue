<template>
    <div>
        <p>Counter is: {{ multiplyCounter }}</p>
        <p>Number of clicks : {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters(["multiplyCounter", "stringCounter"]),
      anotherComputed(){
          return 'test'
      }
  }
};
</script>