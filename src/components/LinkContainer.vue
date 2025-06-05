<template>
  <div 
    v-if="props.links && props.links.length > 0" 
    class="flex justify-center items-center gap-4 my-3 lg:my-4 px-3 lg:px-4 py-3 rounded-4 bg-cover bg-center bg-no-repeat scale-75 lg:scale-100" 
    :style="{ backgroundImage: `url(${glass3BackgroundUrl})` }"
  >
    <a 
      v-for="link in props.links" 
      :key="link.service" 
      :href="link.url" 
      target="_blank" 
      rel="noopener noreferrer"
      :aria-label="`Listen on ${getServiceName(link.service)}`"
      class="bg-white p-2 rounded-4 scale-on-press"
    >
      <img
        v-if="getIcon(link.service)" 
        :src="getIcon(link.service)" 
        :alt="`${getServiceName(link.service)} logo`"
        class="block w-[2.5rem] aspect-square scale-on-press" 
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
import glass3BackgroundUrl from '@/assets/img/bg/glass-3.png';
import TidalLogoUrl from '@/assets/svg/tidal.svg?url';


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
    case 'tidal':
      return TidalLogoUrl;
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
    case 'tidal':
      return 'Tidal';
    default:
      return '';
  }
};
</script>

<style scoped>
</style>