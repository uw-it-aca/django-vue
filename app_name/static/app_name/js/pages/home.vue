// home.vue

<template>
  <b-container id="home">
    hello world
  </b-container>
</template>

<script>
  import CourseTypeahead from "../components/course-typeahead.vue";
  import CurricTypeahead from "../components/curric-typeahead.vue";
  import UserAccept from "../components/user-accept.vue";

  export default {
    name: "Home",
    components: {
      "user-accept": UserAccept,
      "curric-typeahead": CurricTypeahead,
      "course-typeahead": CourseTypeahead
    },
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
