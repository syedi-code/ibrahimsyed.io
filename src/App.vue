<script setup lang="ts">
import { ref } from 'vue'
import type { Album } from './types'
import AlbumList from './components/AlbumList.vue'
import Header from './components/Header.vue'

// Import images
import supercomplexAlbumArt from './assets/img/album/SUPERCOMPLEX.png'
import supercomplexBackground from './assets/img/supercomplex1-3-4.png'
import iwonAlbumArt from './assets/img/album/iwon.jpg'
import iwonBackground from './assets/img/bg/glass-2.png'

const albums = ref<Album[]>([
  {
    id: '1',
    title: 'SUPERCOMPLEX',
    artist: 'Artist A',
    year: 2025,
    albumArtSrc: supercomplexAlbumArt,
    backgroundSrc: supercomplexBackground,
    links: [
      { service: 'spotify', url: 'https://open.spotify.com/album/41xOhhgo8KNni0KLe0Aztq' },
      { service: 'appleMusic', url: 'https://music.apple.com/us/album/youralbumid1' },
      { service: 'youtubeMusic', url: 'https://www.youtube.com/watch?v=JW-4zC7r4sg&list=OLAK5uy_m_2_B0oPtdSpF7bFkuRaRE8vEt-3KLVVQ' },
      { service: 'tidal', url: 'https://tidal.com/browse/album/YOUR_ALBUM_ID1' }
    ]
  },
  {
    id: '2',
    title: 'I Won.',
    artist: 'Artist B',
    year: 2023,
    albumArtSrc: iwonAlbumArt,
    backgroundSrc: iwonBackground,
    links: [
      { service: 'spotify', url: 'https://open.spotify.com/album/0Az4XvOfK8phD4U8O8Nxlj' },
      { service: 'appleMusic', url: 'https://music.apple.com/us/album/i-won/1690302862' },
      { service: 'youtubeMusic', url: 'https://www.youtube.com/watch?v=LEu2GPTER7k&list=OLAK5uy_lMulos4v3lwaAjHTMv4-5Iwe7x-v8kJ5Q' },
      { service: 'tidal', url: 'https://tidal.com/browse/album/YOUR_ALBUM_ID2' }
    ]
  }
])
</script>

<template>
  <div id="app" class="h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory">
    <Header class="snap-start" />
    <AlbumList :albums="albums" class="snap-start" />
  </div>
</template>

<style scoped>
</style>
