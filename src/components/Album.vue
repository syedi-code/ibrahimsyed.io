<template>  
  <div class="album-layout-container flex flex-col items-center gap-0 pb-4 pt-4">
    <img 
      v-motion
      :initial="{ opacity: 0, y: 50, scale: 0.8 }"
      :visible="{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: 'spring',
          stiffness: 100,
          damping: 15,
          mass: 1
        } 
      }"
      :src="album.albumArtSrc" 
      :alt="`${album.title} Album Art`"
      class="w-[10rem] md:w-[15rem] object-cover aspect-square snap-none"
      draggable="false"
    />

    <h1
      class="text-3 md:text-6 font-[500] text-center mb-0 text-white snap-none"
      :title="album.title"
      :aria-label="`${album.title}`"
    >
      {{album.title}}
    </h1>

    <h2
      class="text-2 md:text-4 font-[500] text-center mt-1 mb-0 text-white snap-none" 
      :year="album.year"
      :aria-label="`${album.year}`"
    >
      {{album.year}}
    </h2>

    <LinkContainer 
      v-motion
      :initial="{ opacity: 0, y: 30, scale: 0.9 }"
      :visible="{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: 'spring',
          stiffness: 120,
          damping: 18,
          mass: 0.8,
          delay: 300
        } 
      }"
      :links="album.links"
    />    
    
    <div 
      v-motion
      :initial="{ opacity: 0, y: 40, scale: 0.95 }"
      :visible="{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: 'spring',
          stiffness: 80,
          damping: 20,
          mass: 1.2,
          delay: 600
        } 
      }"
      class="relative lg:w-[50vw] w-[70vw] mx-auto overflow-hidden rounded-5 px-4 lg:px-6 py-5 flex-shrink-0 snap-none shadow-2"
    >
      <img 
        v-motion
        :initial="{ opacity: 0, scale: 1.1 }"
        :visible="{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 1200,
            ease: 'easeOut',
            delay: 800
          } 
        }"
        :src="album.backgroundSrc"
        class="absolute inset-0 w-full h-full object-cover -z-10  snap-none"
        draggable="false"
      />
  
      <div 
        v-if="spotifyEmbedUrl" 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 800,
            ease: 'easeOut',
            delay: 1000
          } 
        }"
        class="relative w-full rounded-[8px] h-[70vh] lg:h-[50vh] snap-none shadow-2"
      >
        <iframe
          :src="spotifyEmbedUrl"
          class="w-full h-full border-0 rounded-[8px]"
          allowfullscreen
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Album } from '../types' 
import LinkContainer from './LinkContainer.vue'; 

interface Props {
  album: Album;
}

const props = defineProps<Props>();

const spotifyEmbedUrl = computed(() => {
  if (!props.album || !props.album.links) {
    return null;
  }
  const spotifyLink = props.album.links.find(link => link.service === 'spotify');
  if (spotifyLink && spotifyLink.url) {
    // Example URL: https://open.spotify.com/album/0Az4XvOfK8phD4U8O8Nxlj
    const match = spotifyLink.url.match(/open\.spotify\.com\/album\/([a-zA-Z0-9]+)/);
    if (match && match[1]) {
      const albumId = match[1];
      return `https://open.spotify.com/embed/album/${albumId}?utm_source=oembed`;
    }
  }
  return null;
});
</script>

<style scoped>
/* Add mobile-specific height constraints */
@media (max-width: 640px) {
  .album-layout-container {
    min-height: 100vh;
    height: auto;
  }
}

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
