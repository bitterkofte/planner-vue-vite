<template>
  <MainNavbar />
  <router-view/>
</template>

<script setup>
import MainNavbar from './components/MainNavbar.vue'
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}

</style>