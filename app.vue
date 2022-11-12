<template>
  <div>
    <h1 class="my-10 text-4xl font-bold uppercase text-red-500 underline">
      {{ teste }}
    </h1>
    <FormKit type="text" />
  </div>
</template>
<script setup>
const teste = useUpperCase('sssssss111111')
</script>
