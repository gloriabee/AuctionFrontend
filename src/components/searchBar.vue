<script setup lang="ts">
import type { Item } from '@/types';
    import {ref} from 'vue'
    import auctionItemService from '@/services/AuctionItemService';
  
    const description=ref('');
    const type=ref('');
    const searchResults=ref<Item[]>([]);

    const searchItems=async () => {
        // Prepare parameters by filtering out empty strings
    const params: { description?: string; type?: string } = {};
    if (description.value) params.description = description.value;
    if (type.value) params.type = type.value;

    console.log('Searching with:', params);
        try {
            const response=await auctionItemService.getItems(params)
            searchResults.value=response.data;
        } catch (error) {
            console.error('Error searching auction items: ',error)
        }
    }
</script>

<template>
    <div class="container mx-auto flex justify-center flex-col items-center">
        <h1 class="text-2xl font-bold mb-4">Search by description and type</h1>
        <div class="mb-4">
          <form @submit.prevent="searchItems">
            <input v-model="description" type="text" placeholder="Description" class="border p-2 mr-2">
            <input v-model="type" type="text" placeholder="Type" class="border p-2 mr-2">
            <button type="submit" class="bg-blue-500 text-white p-2">Search</button>
          </form>
        </div>

        <div class="mt-5">
            <div v-for="(item,index) in searchResults"
            :key="index"
            class="p-4  rounded  bg-[#F8F9FA] flex flex-col justify-center items-center">
                <h1 class="text-2xl text-[#343A40] font-bold">{{item.description}}</h1>
                <p class="">{{item.type}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>