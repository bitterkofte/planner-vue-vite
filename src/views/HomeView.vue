<template>
  <div class="home">
    <FilterNavbar :current="current" @filterChange="current = $event" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <ProjectCard
          :project="project"
          @delete="deleteHandler"
          @complete="toggleComplete"
        />
      </div>
    </div>
    <div v-else="!filteredProjects">
      <img :src="emptyBox"/>
    </div>
  </div>
  <!-- <img :src="emptyBox"/> -->
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue'
import FilterNavbar from '../components/FilterNavbar.vue'
import emptyBox from '../assets/empty-box.svg'

let projects = ref([]);
let filtered = ref([]);
let current = ref('all');

onMounted(() => {
  fetch('http://localhost:3000/projects')
  .then(res => res.json())
  .then(data => {
    projects.value = data
    filtered.value = data
    // console.log('data: ', data)
  })
  .catch(err => console.error(err.message))
})

const deleteHandler = (id) => {
  projects.value = projects.value.filter(p => p.id !== id)
}
const toggleComplete = (id) => {
  let p = projects.value.find(pro => pro.id === id)
  p.complete = !p.complete
  // projects.value = projects.value.map(p => p.id === id ? p.complete = !p.complete : "")
}

// const filterProjects = (cur) => {
//   filtered.value = projects.value.filter(p => {
//     switch (cur) {
//       case 'all':
//         return true
//       case 'ongoing':
//         return !p.complete
//       case 'completed':
//         return p.complete
//       default:
//         return true
//     }
//   })
// }

const filteredProjects = computed(() => {
  switch (current.value) {
    case 'all':
      return projects.value
    case 'ongoing':
      return projects.value.filter(p => !p.complete)
    case 'completed':
      return projects.value.filter(p => p.complete)
    default:
      return projects.value
  }
})
</script>
