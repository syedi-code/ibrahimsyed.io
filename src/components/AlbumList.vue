<template>
  <div class="album-list-container h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory">
    <div 
      class="albums-wrapper flex flex-col items-center min-h-screen 
             gap-6 
             md:py-8 md:gap-12 
            "
    >
      <AlbumComponent 
        v-for="albumData in albums"
        :key="albumData.id"
        :album="albumData" 
        class="album-item shrink-0 snap-start snap-stop-always"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Album } from '../types' // Import the Album type
import AlbumComponent from './Album.vue' // Renamed from Card

interface Props {
  albums: Album[] // Expect an array of Album objects
}

defineProps<Props>()
</script>

<style scoped>
/* Styles for AlbumList can remain minimal if Album.vue handles its own presentation */
</style>
