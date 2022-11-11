<template>
  <div>
    <h1 class="text-red-500 font-bold uppercase underline text-4xl my-10">{{ teste }} </h1>
    <FormKit type="text"/>
  </div>
</template>
<script setup>
const teste = useUpperCase('teste');
</script>

