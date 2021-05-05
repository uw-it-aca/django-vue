<template>
  <div id="main">
    <router-view />
    <axdd-card>
      Axdd card content
    </axdd-card>
  </div>
</template>

<script>
  import { Card } from 'axdd-components';

  export default {
    components: {
      'axdd-card': Card,
    },
  };
</script>
