<script setup lang="ts">
import AuctionItem from '@/components/AuctionItem.vue';

import type { Item } from '@/types';
import { ref } from 'vue';
const items= ref<Item[]>([
  {
    id:123,
    description:"Antique Vase",
    type:"Collectibles"
  },
  {
    id:234,
    description:"Vintage Pot",
    type:"Household"
  },
  {
    id:345,
    description:"Monalisa Picture",
    type:"Paintings"
  }
])

</script>

<template>
 <div class="home m-5">
  <h1 class="text-3xl text-blue-600 text-center font-semibold capitalize">Auction Item Lists</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-8 p-6">
    <AuctionItem v-for="item in items" :key="item.id" :auction-item="item"/>
   
  </div>
 
 </div>
</template>
