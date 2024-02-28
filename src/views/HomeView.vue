<script setup>
import Card from '@/components/card.vue'
import Task from '@/components/task.vue'
import { reactive } from 'vue';
import { useTodoStore } from '@/stores/todo';
import { storeToRefs } from 'pinia';

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);

const state = reactive({
  task: '',
});

const add = () => {
  todoStore.addTodo(
    state.task,
  );
  state.task=''
}

const deleteOne = (id) => {
  todoStore.removeTodo(id);
}

const updateStatus = (id) => {
  todoStore.updateTodoStatus(id);
};

const updateProgress = (id) => {
  todoStore.updateTodoProgress(id);
};
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex justify-center item-center w-screen pt-8">
      <div class="text-center w-[50rem]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card/>
        </div>
        <div class="mt-8 bg-white rounded-md flex-col justify-centeer items-center space-x-4 px-4 py-2">
          <div class="flex justify-between items-center space-x-4 px-4 py-2 w-full">
            <input v-model="state.task" type="text" class="flex-1 px-4 py-2 rounded-md outline-none border border-gray-100 text-sm focus:border-b-2 focus:border-b-green-100" placeholder="Ajouter une nouvelle tâche" />
            <button class="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-bold" @click="add">Creer</button>
          </div>
          <div class="p-4">
           <Task :todos="todos" @deleteTodo="deleteOne" @updateTodo="updateStatus" @updateStatus="updateProgress"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
s
