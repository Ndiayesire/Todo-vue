<script setup>
import {reactive, ref} from "vue"

const state = reactive ({
  todos: [],
})

const newtodo= ref('');

const addTodo = () => {
  if (newtodo.value.trim() !== '') {
    state.todos.push({
      id: state.todos.length + 1,
      text: newtodo.value,
    });
    newtodo.value = '';
  }
};

const removeTodo = (todoId) => {
  const index = state.todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    state.todos.splice(index, 1);
  }
};

</script>

<template>
  <div class="container-fluid">
    <div class="row justify-center item-center">
      <div class="col-3">
        <div class="flex heading pt-12  justify-center">
          <h1 class="text-3xl font-bold text-gray-600 hover:text-red-800 cursor-pointer"> Todo APP </h1>
          <i class="ml-4 pt-0.5 text-green-300 text-3xl ri-task-line"></i>
        </div>
        <div class="card w-100 h-100 shadow pt-2">
          <div class="flex">
            <p class="pt-4 ml-4 text-bold text-green-700 text-xl"> Liste des taches à faire</p>
            <i class="ml-4 pt-4 text-green-300 text-2xl ri-list-check-3"></i>
          </div>
          <div class="flex pt-2">
            <input type="text" name="task" class="border-2 ml-2 rounded h-10 w-80 outline-none text-gray-600 text-sm focus:border-green-300" v-model="newtodo">
            <button @click="addTodo" class="ml-5 bg-green-300 rounded text-white font-semibold w-20 hover:bg-green-800">Ajouter</button>
          </div>
          <div class="pt-2 divider"></div>
          <div class="flex justify-between items-center w-100 ml-1" v-for="todo in state.todos" :key="state.id">
            <div class="flex items-center ">
              <input type="checkbox" class="border-2 ml-6 rounded h-10 outline-none text-gray-600">
              <label class="ml-3 text-gray-500 text-bold text-md">{{todo.text}}</label>
            </div>
            <i class="mr-5 pt-2  text-xl ri-delete-bin-line text-red-600 cursor-pointer" @click="removeTodo(todo.id)"></i>
          </div>
          <p class="ml-5 text-gray-700 pt-5" v-if="state.todos.length <= 0">- Pas de note créez en un 👋</p>
        </div>
      </div>
    </div>
  </div>

  </template>
  
  <style scoped>
   
   input[type="checkbox"]:checked + label {
    text-decoration: rgb(110, 31, 31) line-through;
}

  </style>