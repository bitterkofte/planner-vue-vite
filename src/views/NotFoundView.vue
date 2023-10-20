//TEMPLATE
<template>
<div class='notfoundview'>
  <h1 class=''>404</h1>
  <h2 class=''>PAGE NOT FOUND</h2>
</div>
</template>


//SCRIPT
<script>
export default {
  props: ['first'],
  data() {
    return {
      value: 5,
    }
  },
  methods: {
    
  },
}
</script>


//STYLE
<style>
.notfoundview {
  color: red;
}
</style>