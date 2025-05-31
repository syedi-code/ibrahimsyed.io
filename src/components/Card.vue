<template>
  <div 
    class="card relative w-80 max-w-[85vw] mx-auto overflow-hidden rounded-7"
    :style="{ 
      aspectRatio: '3/4',
      boxShadow: 'var(--shadow-2)'
    }"
  >
    <img 
      :src="imageSrc" 
      :alt="alt"
      class="w-full h-full object-cover"
      draggable="false"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  alt: 'Album cover'
})
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
