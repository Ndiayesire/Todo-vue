<template>
    <ul class="space-y-2">
      <li class="flex items-center justify-between" v-for="todo in props.todos" :key="todo.id">
        <div class="flex items-center space-x-2">
            <input v-if="todo.isFinished === false" type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" :checked="todo.isProgress" @change="updateTaskProgress(todo.id)">
          <p class="text-gray-500 text-medium font-semibold text-sm line-clamp-1 truncate ..." :class="{ 'line-through': todo.isFinished }">{{ todo.name }}</p>
        </div>
        <div class="flex items-center justify-between space-x-8">
          <i class="ri-delete-bin-line text-red-500 font-semibold cursor-pointer" @click="deleteTask(todo.id)"></i>
          <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle" :id="'toggle-' + todo.id" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" :checked="todo.isFinished" @change="updateTask(todo.id)">
          <label :for="'toggle-' + todo.id" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div> 
        </div>
       
      </li>
    </ul>
  </template>
  
  <script setup>
  const emit = defineEmits(['deleteTodo', 'updateTodo', 'updateStatus']);

  const deleteTask = (id) => {
    emit('deleteTodo', id);
  };

  const updateTask = (id) => {
    emit('updateTodo', id);
  };

  const updateTaskProgress = (id) => {
    emit('updateStatus', id);
  };

  const props = defineProps({
    todos: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
  </style>
  