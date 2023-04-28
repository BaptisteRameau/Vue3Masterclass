<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PageHome/>
</template>

<script>
import PageHome from '@/components/PageHome.vue'

export default {
  name: 'App',
  components: {
    PageHome
  }
}
</script>

<style>
@import "assets/style.css";
@import "~bootstrap/css/bootstrap.css";
</style>
