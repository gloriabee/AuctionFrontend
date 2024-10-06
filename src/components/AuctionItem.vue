<script setup lang="ts">
import type { Item } from '@/types';
defineProps<{
   auctionItem : Item
}>()
</script>

<template>
   <div class="p-4  rounded  bg-[#F8F9FA] flex flex-col justify-center items-center">
    <h1 class="text-2xl text-[#343A40] font-bold">{{auctionItem.description}}</h1>
    <p class="">{{auctionItem.type}}</p>
   </div>
</template>

<style scoped>

</style>
