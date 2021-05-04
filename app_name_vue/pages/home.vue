// home.vue

<template>
  <b-container>
    <hello-world />
    <div id="home">
      welcome home... to my example app!
    </div>
  </b-container>
</template>

<script>
  import HelloWorld from "../components/hello-world.vue";

  export default {
    name: "Home",
    components: {
      "hello-world": HelloWorld
    },
    data() {
      return { };
    },
    mounted() {
      // update page title
      document.title = "home - example app";
    },
    methods: {}
  };
</script>

<style lang="scss">
</style>
