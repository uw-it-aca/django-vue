<template>
  <div>
    <header>header</header>
    <nav>
      navigation
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about/">about</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
      <axdd-card>
        Axdd card content
      </axdd-card>
    </main>
    <footer>footer</footer>
  </div>
</template>

<script>
import {Card} from 'axdd-components';

export default {
  components: {
    'axdd-card': Card,
  },
};
</script>

<style lang="scss">
// import custom bootstrap theme and base styling for app
@import "./css/_variables.scss";
@import "./css/custom.scss";
@import "./css/base.scss";
</style>
