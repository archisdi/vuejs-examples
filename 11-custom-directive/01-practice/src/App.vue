<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-on-double:mouseenter="mouseEnter" v-on-double:mouseleave="mouseLeave">Click me</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    onDouble: {
      bind(el, binding) {
        el.onclick = function() {
          let type = binding.arg;
          let action = binding.value;
          el.addEventListener(type, action);
        };
      }
    }
  },
  methods: {
    clicked() {
      alert("i was click");
    },
    mouseEnter() {
      console.log("mouse enter");
    },
    mouseLeave() {
      console.log("mouse leave");
    },
  }
};
</script>

<style>

</style>
