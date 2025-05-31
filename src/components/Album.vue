<template>
  <div class="album-layout-container flex flex-col items-center gap-0 py-4">
    
    <img 
      :src="album.albumArtSrc" 
      :alt="`${album.title} Album Art`"
      class="w-[10rem] md:w-[15rem] object-cover aspect-square"
      draggable="false"
    />

    <h1
      class="text-5 md:text-6 font-[500] text-center mb-0 text-white"
      :title="album.title"
      :aria-label="`${album.title}`"
    >
      {{album.title}}
    </h1>

    <h2
      class="text-3 md:text-4 font-[500] text-center mt-1 mb-0 text-white" 
      :year="album.year"
      :aria-label="`${album.year}`"
    >
      {{album.year}}
    </h2>

    <LinkContainer :links="album.links" />

    <div 
      class="card relative lg:w-[50vw] h-[75vh] w-[80vw] mx-auto overflow-hidden rounded-7"
      :style="{ 
        aspectRatio: '3/4',
        boxShadow: 'var(--shadow-2)'
      }"
    >
      <img 
        :src="album.backgroundSrc"
        class="w-full h-full object-cover"
        draggable="false"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Album } from '../types' 
import LinkContainer from './LinkContainer.vue'; 

interface Props {
  album: Album;
}

defineProps<Props>();
</script>

<style scoped>
.card {
  touch-action: none;
  user-select: none;
}

@media (max-width: 640px) {
  .card {
    max-width: 85vw;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 90vw;
  }
}
</style>
