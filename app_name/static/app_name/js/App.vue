<template>

  <div>

    <h1>hello world</h1>

    <main >
      <router-view />
    </main>


  </div>
</template>

<script>
  export default {
    components: { }
  };
</script>

<style lang="scss">

  // import custom bootstrap theme and base styling for app
  @import '../css/_variables.scss';
  @import '../css/custom.scss';
  @import '../css/base.scss';

</style>
