<template>
    <!-- Done Card -->
    <div class="max-w-xs rounded-lg overflow-hidden bg-white">
      <div class="px-6 py-4">
        <div class="flex items-center justify-between">
          <span class="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full uppercase font-bold tracking-wide">Terminé</span>
          <i class="ri-check-line text-green-500 text-2xl"></i>
        </div>
        <h1 class="text-gray-300 mt-2 font-bold text-5xl">{{ getFinishedTodos.length }}</h1>
      </div>
    </div>
    
    <!-- Not Started Card -->
    <div class="max-w-xs rounded-lg overflow-hidden bg-white">
      <div class="px-6 py-4">
        <div class="flex items-center justify-between">
          <span class="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full uppercase font-bold tracking-wide">Pas commencé</span>
          <i class="ri-checkbox-circle-fill text-red-500 text-2xl"></i>
        </div>
        <h1 class="text-gray-300 mt-2 font-bold text-5xl">{{ getUnfinishedTodos.length }}</h1>
      </div>
    </div>
    
    <!-- In Progress Card -->
    <div class="max-w-xs rounded-lg overflow-hidden bg-white">
      <div class="px-6 py-4">
        <div class="flex items-center justify-between">
          <span class="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full uppercase font-bold tracking-wide">En cours</span>
          <i class="ri-loader-line animate-spin text-yellow-500 text-2xl"></i>
        </div>
        <h1 class="text-gray-300 mt-2 font-bold text-5xl">{{ getProgressTodos.length }}</h1>
      </div>
    </div>
  </template>

  <script setup>
import { useTodoStore } from '@/stores/todo';
import { toRefs } from 'vue';

const todoStore = useTodoStore();

const { getFinishedTodos, getUnfinishedTodos, getProgressTodos } = toRefs(todoStore);
</script>