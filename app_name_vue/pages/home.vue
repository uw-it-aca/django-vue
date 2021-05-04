// home.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>
    <template #content>
      <hello-world />
      <div id="home">
        welcome home... to my example app!
      </div>
      <p class="font-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        pulvinar est. Sed gravida neque justo, pellentesque finibus velit
        scelerisque eu. Curabitur et dolor luctus, convallis magna at, mollis
        purus. Nunc tincidunt risus quis nisl bibendum volutpat. Praesent ut
        tincidunt ex. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Praesent porta ante id aliquet pretium. Nam sit amet malesuada
        elit. Mauris pharetra lorem in sollicitudin rutrum. Proin euismod dolor
        in enim porta consequat hendrerit quis augue. Phasellus commodo purus
        non aliquam rutrum.
      </p>
    </template>
  </layout>
</template>

<script>
  import Layout from "../Layout.vue";
  import HelloWorld from "../components/hello-world.vue";

  export default {
    components: {
      'layout': Layout,
      'hello-world': HelloWorld,
    },
    data() {
      return {
        pageTitle: "My Home title",
      };
    },
    methods: {},
  };
</script>

<style lang="scss"></style>
