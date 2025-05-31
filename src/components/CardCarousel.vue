<template>
  <div class="carousel-container w-full h-full flex flex-col items-center justify-center overflow-y-auto border-none">
    <Card 
      v-for="(image, index) in images"
      :key="image"
      :image-src="`/src/assets/img/${image}`" 
      :alt="`Album ${index + 1}`"
    />
  </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'

interface Props {
  images: string[]
}

const props = defineProps<Props>()
</script>

<style scoped>
.carousel-container {
  min-height: 100vh;
}
</style>
