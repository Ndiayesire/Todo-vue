import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [],
      isFinished: false,
      isProgress: false,
    }
  },

  getters: {

    getFinishedTodos() {
      return this.todos.filter(todo => todo.isFinished);
    },

    getUnfinishedTodos() {
      return this.todos.filter(todo => !todo.isFinished && !todo.isProgress);
    },

    getProgressTodos() {
      return this.todos.filter(todo => todo.isProgress);
    },
  },

  actions: {
    addTodo(name, time) {
      const id = Math.floor(Math.random() * 100);
      this.todos.push({ id, name: name, time: time, isFinished: false, isProgress: false });
    },

    removeTodo(id) {    
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },

    updateTodoStatus(id) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index].isFinished = !this.todos[index].isFinished;
      }
    },

    updateTodoProgress(id) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index].isProgress = !this.todos[index].isProgress;
      }
    },  
    
  },

  persist: true,

});
