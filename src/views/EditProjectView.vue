//TEMPLATE
<template>
  <form>
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button @click="submitHandler">Edit Project</button>
  </form>
</template>

//SCRIPT
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps(["id"]);

let title = ref("");
let details = ref("");
const router = useRouter();
const uri = `http://localhost:3000/projects/${props.id}`;

onMounted(() => {
  fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      title.value = data.title;
      details.value = data.details;
    })
    .catch((err) => console.error(err.message));
});

const submitHandler = () => {
  fetch(uri, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title.value, details: details.value }),
  }).then(() => {
    router.go(-1)
  }).catch((err) => console.error(err.message));
};
</script>

//STYLE
<style>
.editprojectview {
}
</style>
