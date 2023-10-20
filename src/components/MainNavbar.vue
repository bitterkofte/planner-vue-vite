//TEMPLATE
<template>
<nav class="main-nav">
  <router-link :to="{ name: 'home' }">Home</router-link>
  <router-link :to="{ name: 'newProject' }">New Project</router-link>
</nav>
</template>


//SCRIPT
<script setup>
import { ref } from 'vue';

  let aga = ref('')
</script>


//STYLE
<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a{
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
  /* transition: all 300ms; */
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>