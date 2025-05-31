<script setup lang="ts">
import { ref } from 'vue'
import CardCarousel from './components/CardCarousel.vue'

// Define the images array
const images = ref<string[]>([
  'oceanDepths-3-4.png',
  'supercomplex1-3-4.png',
  'Rorschach-3-4.png',
])
</script>

<template>
  <div id="app" class="h-screen w-full overflow-hidden">
    <CardCarousel :images="images" />
  </div>
</template>

<style scoped>
/* App-level styles */
</style>
