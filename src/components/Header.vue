<template>  <div 
    v-motion
    :initial="{ opacity: 0, y: -30, scale: 0.95 }"
    :enter="{ 
        opacity: 1,
        transition: { 
        duration: 500,
        delay: 100
      } 
    }"
    class="header-container flex justify-between items-center px-3 mt-4"
  >    
  <div class="flex-1 flex justify-center">
    <a 
      href="https://github.com/doombot-v1/supercomplex" 
      target="_blank" 
      rel="noopener noreferrer"
      class="github-link pt-4"
    >
      <img 
        :src="githubSvgUrl"
        alt="GitHub Repository"
        class="w-[1.75rem] aspect-square duration-200"
      />
    </a>
  </div>
  </div>
</template>

<script setup lang="ts">
import githubSvgUrl from '@/assets/svg/github.svg?url';
</script>

<style scoped>
.header-container {
  touch-action: none;
  user-select: none;
}

.header-svg-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .header-svg-wrapper img {
    max-width: 80vw;
  }
}

@media (max-width: 480px) {
  .header-svg-wrapper img {
    max-width: 75vw;
  }
}

@media (max-width: 360px) {
  .header-svg-wrapper img {
    max-width: 70vw;
  }
}
</style>
