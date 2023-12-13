<template>
     <div class="card shadow w-100 h-100 shadow-md pt-2">
          <div class="flex">
            <p class="tracking-tighter pt-4 ml-4 text-bold text-green-700 text-xl"> Liste des taches à faire</p>
            <i class="ml-4 pt-4 text-green-800 text-2xl ri-list-check-3"></i>
          </div>
          <div class="flex pt-2">
           <BaseInput v-model="newTodo"/>
           <BaseButton @onClick="addTodo" />
          </div>
          <div class="pt-2 divider"></div>
         <TodoItem :todos="todos" @removeTodo="removeTodo" />
        </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
import BaseButton from '../components/button/button.vue'
import BaseInput from '../components/input/input.vue'

export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  components: {
    TodoItem,
    BaseButton,
    BaseInput,
  },
};

</script>