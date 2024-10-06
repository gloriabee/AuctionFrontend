<script setup lang="ts">

</script>

<template>
    <div class="container mx-auto flex justify-center flex-col items-center">
        <h1 class="text-2xl font-bold mb-4">Search by description and type</h1>
        <div class="mb-4">
            <input id="description" type="text" placeholder="Description" class="border p-2 mr-2">
            <input id="type" type="text" placeholder="Type" class="border p-2 mr-2">
            <button onclick="searchItems()" class="bg-blue-500 text-white p-2">Search</button>
        </div>
    </div>
</template>

<style scoped>

</style>