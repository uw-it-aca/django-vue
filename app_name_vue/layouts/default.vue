<template>
  <div class="container-xl">
    <div class="px-3">
      <header
        class="d-flex justify-content-between align-items-center border-bottom my-4 pb-3"
      >
        <div class="h4 flex-fill">
          <i class="bi bi-box-fill text-purple me-2"></i>
          <a href="/" class="text-reset text-decoration-none">{{ appName }}</a>
        </div>
      </header>

      <main>
        <h1 class="">
          <slot name="title">{{ pageTitle }}</slot>
        </h1>

        <slot name="description" />
        <hr class="d-inline-block my-5 w-25" />
        <slot name="content" />
      </main>

      <footer class="text-muted border-top mt-5 mb-3 pt-2">
        Copyright &copy; {{ currentYear }} University of Washington
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
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
        appName: "Django+Vue",
        // automatically set year
        currentYear: new Date().getFullYear(),
      };
    },
    created: function () {
      // constructs page title in the following format "Page Title - AppName"
      // document.title = this.pageTitle + " - " + this.appName;
      document.title = `${this.pageTitle} - ${this.appName}`;
    },
  };
</script>
