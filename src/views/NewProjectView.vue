//TEMPLATE
<template>
<form @submit.prevent="submitHandler">
  <label>Title</label>
  <input type="text" v-model="title" required>
  <label>Details</label>
  <textarea v-model="details" required></textarea>
  <button>Add Project</button>
</form>
</template>


//SCRIPT
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


let title = ref('')
let details = ref('')
const router = useRouter()

// const handleSubmit = () => {
//   console.log(title.value, details.value)
// }

const submitHandler = () => {
  let project = {
    title: title.value,
    details: details.value,
    complete: false
  }
  console.log(project)

  fetch('http://localhost:3000/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project)
  }).then(() => {
    router.push('/')
  }).catch(err => console.error(err.message))
}
</script>


//STYLE
<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0
}
input, textarea {
  border-radius: 10px;
  box-shadow: 1px 1px 10px 2px #c6c6c6;
  transition: all 300ms;
}
input:focus, textarea:focus {
  box-shadow: 1px 1px 10px 2px #00ce89;
}
input {
  padding: 10px;
  border: 0;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  padding: 10px;
  min-width: 40px;
  min-height: 40px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: 100px;
}
textarea::-webkit-resizer {
  /* border: 2px solid black;
  background: red;
  box-shadow: 0 0 5px 5px blue;
  outline: 2px solid yellow; */
  border-width: 12px;
  border-radius: 0 0 10px 0;
  /* border-bottom-right-radius: 10px; */
  border-style: solid;
  border-color: transparent #00ce89 #00ce89 transparent;

}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms;
}
form button:hover {
  box-shadow: 2px 2px 7px #c0c0c0;
}
</style>