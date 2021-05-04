<template>
  <!-- layout.vue: this is where you override the layout -->
  <div :app-name="appName" :page-title="pageTitle">
    <header class="bg-secondary text-white h1">
      {{ appName }}
    </header>
    <nav class="navbar navbar-dark">
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about/">about</router-link></li>
      </ul>
    </nav>
    <main>
      <h1>
        <slot name="title">
          {{ pageTitle }}
        </slot>
      </h1>

      <slot name="content" />
    </main>
    <footer class="bg-dark text-white">
      Copyright &copy; {{ currentYear }} University of Washington
    </footer>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      pageTitle: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        // minimum application setup overrides
        appName: "App Name",
        // automatically set year
        currentYear: new Date().getFullYear(),
      };
    },
    created: function () {
      // constructs page title in the following format "Page Title - AppName"
      document.title = this.pageTitle + ' - ' + this.appName;
    },
  };
</script>

<style lang="scss" scoped></style>
