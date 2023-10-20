//TEMPLATE
<template>
  <div class="project" :class="{ done: project.complete}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'editProject', params: { id: project.id } }">
          <span class="material-icons"> edit </span>
        </router-link>
        <span @click="deleteHandler" class="material-icons"> delete_forever </span>
        <span @click="toggleComplete" class="material-icons" :class="{ disabled: disabled }" :disabled="disabled"> {{ project.complete ? "undo" : "done" }} </span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
  <!-- <p>{{ disabled }}</p> -->
</template>

//SCRIPT
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["delete"]);
const props = defineProps(["project"]);

let showDetails = ref(false);
let disabled = ref(false);
const uri = `http://localhost:3000/projects/${props.project.id}`;

const deleteHandler = () => {
  fetch(uri, { method: "DELETE" })
    .then(() => emit("delete", props.project.id))
    .catch((err) => console.error(err.message));
};

const toggleComplete = () => {
  if(disabled.value) return
  fetch(uri, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ complete: !props.project.complete }),
  })
    .then(() => {
      emit("complete", props.project.id)
      disabled.value = true
      setTimeout(() => {
        disabled.value = false
      }, 2000);
    })
    .catch((err) => console.error(err.message));
};

// onMounted(() => console.log('ONMOUNTED!!!'))
// onUnmounted(() => console.log("unmounted"))
</script>

//STYLE
<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
  user-select: none;
  transition: all 400ms;
}
.done {
  border-left-color: #1cbb31;
}

h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons > * {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
  transition: all 200ms;
  /* cursor: default; */
}
.material-icons:nth-child(1):hover {
  transform: scale(1.07);
  color: #ded421;
  text-shadow: 0 0 7px #fffb89, 0 0 10px #fffc9e, 0 0 15px #fffeb4,
    0 0 23px #feffb6;
}
.material-icons:nth-child(2):hover {
  transform: scale(1.07);
  color: #e60f0f;
  text-shadow: 0 0 7px #ff8989, 0 0 10px #ff9e9e, 0 0 15px #ffb4b4,
    0 0 23px #ffb6b6;
}
.material-icons:nth-child(3):hover {
  transform: scale(1.07);
  color: #1cbb31;
  text-shadow: 0 0 7px #2efe38, 0 0 10px #47ff51, 0 0 15px #60ff68,
    0 0 23px #77ff7e;
}

/* .material-icons[disabled] {
  color: red;
  cursor: not-allowed;
} */
/* .material-icons:disabled {
  cursor: not-allowed;
} */
.material-icons.disabled {
  color: #000000;
  cursor: not-allowed;
}
.material-icons.disabled:hover {
  color: #000000;
  text-shadow: 0 0 7px #373737, 0 0 10px #515151, 0 0 15px #7a7a7a,
    0 0 23px #9d9d9d;
}
</style>
