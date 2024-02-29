<template>
    <ul class="space-y-2">
      <li class="flex items-center justify-between" v-for="todo in props.todos" :key="todo.id">
        <div class="flex items-center space-x-2">
            <input v-if="todo.isFinished === false" type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" :checked="todo.isProgress" @change="updateTaskProgress(todo.id)">
          <p class="text-gray-500 text-medium text-sm line-clamp-1 truncate ..." :class="{ 'line-through': todo.isFinished }">{{ todo.name }}</p>
          <p class="text-yellow-500 text-medium font-semibold text-sm line-clamp-1" >{{ todo.time }}</p>
        </div>
        <div class="flex items-center justify-between space-x-8">
          <i class="ri-delete-bin-line text-red-500 font-semibold cursor-pointer" @click="deleteTask(todo.id)"></i>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" name="toggle" :id="'toggle-' + todo.id" class="sr-only peer" :checked="todo.isFinished" @change="updateTask(todo.id)">
            <div class="group peer after:content-['😑'] peer-checked:after:content-['😍'] ring-0 bg-gray-200 rounded-full outline-none duration-300 after:duration-300 w-10 h-5 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-4 after:w-4 after:top-0.5 after:left-0.5 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:after:rotate-0">
            </div>
          </label>
        </div>
      </li>
    </ul>
    <p class="text-gray-400 text-medium font-semibold text-sm line-clamp-1" v-if="props.todos.length <= 0">Vous etes à jour 👋</p>     
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
  