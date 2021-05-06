// home.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>

    <template #description>
      <p class="p-0 col-md-8 lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget pulvinar est. Sed
        gravida neque justo, pellentesque finibus velit scelerisque eu. Curabitur et dolor luctus,
        convallis magna at, mollis purus. Nunc tincidunt risus quis nisl bibendum volutpat. Praesent
        ut tincidunt ex.
      </p>
    </template>

    <template #content>
      <div class="row">
        <div class="col-md-6">
          <h2>Development</h2>
          <p>
            What's included? This template repository is intended to start you off with AXDD's
            supported development stack.
          </p>
          <ul>
            <li>Django Container</li>
            <li>BootstrapVue (BS 4)</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2>Customization</h2>
          <p>
            Ready to go beyond the starter template and start buidling your application? Read about
            how to <a href="/customize/">customize</a> your application.
          </p>
        </div>
      </div>
    </template>
  </layout>
</template>

<script>
import Layout from '../layout.vue';

export default {
  components: {
    layout: Layout,
  },
  data() {
    return {
      pageTitle: 'Getting started',
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
