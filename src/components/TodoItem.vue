<template>
 <div class="flex justify-between items-center w-100 ml-1" v-for=" (todo,index) in todos" :key="index">
     <div class="flex items-center ">
        <input type="checkbox" class="border-2 ml-6 rounded h-10 outline-none text-gray-600">
        <label class="ml-3 text-gray-500 text-bold text-md">{{todo.text}}</label>
     </div>
        <i class="mr-5 pt-2  text-xl ri-delete-bin-line text-red-600 cursor-pointer" @click="removeTodo(todo.id)"></i>
</div>
    <p class="italic ml-5 text-gray-700 pt-5" v-if="todos.length <= 0">- Pas de note créez en un 👋</p>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  methods: {
    removeTodo(index) {
      this.$emit('removeTodo', index);
    },
  },
};
</script>

<style scoped> 
   input[type="checkbox"]:checked + label {
    text-decoration: rgb(255, 75, 75) line-through;
}
</style>