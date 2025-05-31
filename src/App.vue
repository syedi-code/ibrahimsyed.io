<script setup lang="ts">
import { ref } from 'vue'
import type { Album } from './types'
import AlbumList from './components/AlbumList.vue'

const albums = ref<Album[]>([
  {
    id: '1',
    title: 'SUPERCOMPLEX',
    artist: 'Artist A',
    year: 2025,
    albumArtSrc: '/src/assets/img/album/SUPERCOMPLEX.png',
    backgroundSrc: '/src/assets/img/supercomplex1-3-4.png',
    links: [
      { service: 'spotify', url: 'https://open.spotify.com/album/youralbumid1' },
      { service: 'appleMusic', url: 'https://music.apple.com/us/album/youralbumid1' },
      { service: 'youtubeMusic', url: 'https://music.youtube.com/playlist?list=yourplaylistid1' }
    ]
  },
  {
    id: '2',
    title: 'I Won.',
    artist: 'Artist B',
    year: 2023,
    albumArtSrc: '/src/assets/img/album/iwon.jpg',
    backgroundSrc: '/src/assets/img/bg/glass-2.png',
    links: [
      { service: 'spotify', url: 'https://open.spotify.com/album/0Az4XvOfK8phD4U8O8Nxlj' },
      { service: 'appleMusic', url: 'https://music.apple.com/us/album/i-won/1690302862' },
      { service: 'youtubeMusic', url: 'https://www.youtube.com/watch?v=LEu2GPTER7k&list=OLAK5uy_lMulos4v3lwaAjHTMv4-5Iwe7x-v8kJ5Q' }
    ]
  }
])
</script>

<template>
  <div id="app" class="h-screen w-full overflow-hidden">
    <AlbumList :albums="albums" />
  </div>
</template>

<style scoped>
</style>
