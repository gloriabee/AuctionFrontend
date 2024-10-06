<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <div id="layout">
  <header class="bg-gray-800 text-white">
    <div class="wrapper mx-auto px-4 py-2 flex justify-between items-center">
      <nav class="flex space-x-5 justify-center items-center m-auto">
        <RouterLink to="/" class="text-lg font-semibold hover:text-blue-400">Home</RouterLink>
        <RouterLink to="/search" class="text-lg font-semibold hover:text-blue-400">Search</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</div>
</template>

