<template>  <div class="album-layout-container flex flex-col items-center gap-0 py-4 h-screen">
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
      class="relative lg:w-[50vw] w-[70vw] mx-auto overflow-hidden rounded-7 p-4"
      :style="{ 
        boxShadow: 'var(--shadow-2)'
      }"
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
        class="absolute inset-0 w-full h-full object-cover -z-10"
        draggable="false"
      />
      <!-- Spotify Embed Start -->
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
        class="relative w-full rounded-[8px] h-[50vh]"
      >
        <iframe
          :src="spotifyEmbedUrl"
          class="w-full h-full border-0"
          allowfullscreen
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
          loading="lazy"
        ></iframe>
      </div>
      <!-- Spotify Embed End -->
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'; // Import computed
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
