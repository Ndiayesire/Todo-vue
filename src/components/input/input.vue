<template>
<input type="text" name="task" class="border-1 ml-2 rounded h-10 w-80 outline-none text-gray-600 text-sm focus:border-green-800 border-green-800" v-model="newTodo" :placeholder="props.placeholder">
</template>

<script setup>
import {ref} from 'vue'
const newTodo = ref('')

const props = defineProps ({
    placeholder : {
        type: String,
        default : 'Entrer une note'
    }
})
</script>
