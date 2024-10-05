<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="layout">
    <header>
      <h1 class="text-3xl">Hello World</h1>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/search">Search</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView/>
  </div>
</template>

