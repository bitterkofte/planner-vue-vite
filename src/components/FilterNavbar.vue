//TEMPLATE
<template>
<div class='filternavbar'>
  <nav class="filter-nav">
    <button 
      @click="updateFilter('all')" 
      :class="{ active: current === 'all'}"
    >View all</button>
    <button 
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed'}"
    >Completed</button>
    <button 
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing'}"
    >Ongoing</button>
  </nav>
</div>
</template>


//SCRIPT
<script setup>
const emit = defineEmits(['filterChange'])
const props = defineProps(['current'])
const updateFilter = (by) => {
  emit('filterChange', by)
}
</script>


//STYLE
<style>
.filter-nav {
  display: flex;
}
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms;
}
.filter-nav button.active {
  color: #555;
}
</style>