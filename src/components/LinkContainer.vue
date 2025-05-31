<template>
  <div 
    v-if="props.links && props.links.length > 0" 
    class="flex justify-center items-center gap-4 my-4 px-4 py-3 rounded-4 bg-cover bg-center bg-no-repeat" 
    :style="{ backgroundImage: `url(${glass3BackgroundUrl})` }"
  >
    <a 
      v-for="link in props.links" 
      :key="link.service" 
      :href="link.url" 
      target="_blank" 
      rel="noopener noreferrer"
      :aria-label="`Listen on ${getServiceName(link.service)}`"
      class="bg-white p-2 rounded-4"
    >
      <img
        v-if="getIcon(link.service)" 
        :src="getIcon(link.service)" 
        :alt="`${getServiceName(link.service)} logo`"
        class="block w-[2.5rem] aspect-square" 
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import type { AlbumLink } from '../types';
// Import SVGs as URLs by appending ?url
import SpotifyLogoUrl from '@/assets/svg/Spotify.svg?url';
import AppleMusicLogoUrl from '@/assets/svg/AppleMusic.svg?url';
import YouTubeMusicLogoUrl from '@/assets/svg/YouTubeMusic.svg?url';
import glassBackgroundUrl from '@/assets/img/bg/glass-1.png';
import glass2BackgroundUrl from '@/assets/img/bg/glass-2.png';
import glass3BackgroundUrl from '@/assets/img/bg/glass-3.png';


const props = defineProps<{
  links?: AlbumLink[];
}>();

// Always return a string; empty string for no icon
const getIcon = (service: AlbumLink['service']): string => {
  switch (service) {
    case 'spotify':
      return SpotifyLogoUrl;
    case 'appleMusic':
      return AppleMusicLogoUrl;
    case 'youtubeMusic':
      return YouTubeMusicLogoUrl;
    default:
      return '';
  }
};

const getServiceName = (service: AlbumLink['service']): string => {
  switch (service) {
    case 'spotify':
      return 'Spotify';
    case 'appleMusic':
      return 'Apple Music';
    case 'youtubeMusic':
      return 'YouTube Music';
    default:
      return '';
  }
};
</script>

<style scoped>
</style>