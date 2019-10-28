// home.vue

<template>
  <b-container id="home">
    hello world
  </b-container>
</template>

<script>


  export default {
    name: "Home",
    components: { },
    data() {
      return {
        selected: 'course',
      };
    },
    mounted() {
      document.title = "Prereq Map - University of Washington";
    },
    methods: {}
  };
</script>

<style lang="scss">
</style>
