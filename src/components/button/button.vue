<template>
    <button class="ml-5 bg-green-800 rounded text-white font-semibold w-40 hover:bg-green-800" @click="Click">Ajouter une note</button>
</template>
<script>
export default {
  methods: {
    Click() {
      this.$emit('onClick');
    },
  },
};
</script>