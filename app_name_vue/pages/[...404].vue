<template>
  <DefaultLayout :page-title="pageTitle">
    <template #title>{{ pageTitle }}</template>

    <template #description>
      <div class="col-md-8 lead p-0">
        <p>The page you're looking for doesn't exist or has been moved.</p>
      </div>
    </template>

    <template #content>
      <div class="row">
        <div class="col-md-6">
          <p>
            <a href="/" class="btn btn-primary">Go to Home</a>
          </p>
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script>
  import DefaultLayout from "@/layouts/default.vue";

  export default {
    name: "NotFoundPage",
    components: { DefaultLayout },
    data() {
      return { pageTitle: "404 - Page Not Found" };
    },
  };
</script>
