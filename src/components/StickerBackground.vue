<template>
  <div class="sticker-background-container">
    <div
      v-for="(row, rowIndex) in stickerRows"
      :key="`row-${rowIndex}`"
      class="sticker-row"
      :style="{ transform: rowIndex % 2 === 0 ? 'translateX(0)' : `translateX(-${rowOffsetPx}px)` }"
    >
      <img
        v-for="(sticker, stickerIndex) in row"
        :key="`sticker-${rowIndex}-${stickerIndex}`"
        :src="sticker.src"
        alt="Decorative sticker icon"
        class="sticker-item"
        :style="{
          transform: `rotate(${sticker.angle}deg) scale(${sticker.scale})`,
          opacity: sticker.opacity
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import burritoIconUrl from '@/assets/icons/burrito.png?url';
import tacoIconUrl from '@/assets/icons/taco.png?url';
import sandwichIconUrl from '@/assets/icons/sandwich.png?url';

interface StickerItem {
  src: string;
  angle: number;
  scale: number;
  opacity: number;
}

const stickerSources = [burritoIconUrl, tacoIconUrl, sandwichIconUrl];
const stickerRows = ref<Array<Array<StickerItem>>>([]);

const VISUAL_STICKER_SIZE_PX = 64;
const GAP_BETWEEN_ITEMS_PX = 24;
const STICKER_OPACITY = 0.25;
const MAX_ROTATION_DEG = 40;
const SCALE_VARIATION_PERCENT = 50;

const MIN_INDIVIDUAL_OPACITY_CENTER = 0.1; // Sticker opacity at the very center (e.g., 10%)
const MAX_INDIVIDUAL_OPACITY_EDGE = 1.0;   // Sticker opacity at the very edges (e.g., 80%)

const effectiveStickerSizePx = computed(() => VISUAL_STICKER_SIZE_PX + GAP_BETWEEN_ITEMS_PX);
const rowOffsetPx = computed(() => VISUAL_STICKER_SIZE_PX / 2 + GAP_BETWEEN_ITEMS_PX / 2);

function getRandomStickerSrc(excludeSrc?: string): string {
  let choices = stickerSources;
  if (excludeSrc) {
    choices = stickerSources.filter(s => s !== excludeSrc);
  }
  if (choices.length === 0 && stickerSources.length > 0) {
    choices = stickerSources;
  }
  if (choices.length === 0) return '';
  return choices[Math.floor(Math.random() * choices.length)];
}

function generateStickerLayout() {
  if (typeof window === 'undefined') return;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const viewportCenterX = screenWidth / 2;
  const viewportCenterY = screenHeight / 2;

  const maxPossibleDistance = Math.sqrt(viewportCenterX ** 2 + viewportCenterY ** 2);

  const stickersPerRow = Math.floor(screenWidth / effectiveStickerSizePx.value) + 2;
  const numberOfRows = Math.floor(screenHeight / effectiveStickerSizePx.value) + 1;

  const newRowsData: Array<Array<StickerItem>> = [];
  
  for (let i = 0; i < numberOfRows; i++) {
    const currentRow: Array<StickerItem> = [];
    let lastStickerSrc: string | undefined = undefined;
    for (let j = 0; j < stickersPerRow; j++) {
      const selectedSrc = getRandomStickerSrc(lastStickerSrc);
      if (!selectedSrc) continue;

      const angle = (Math.random() * (MAX_ROTATION_DEG * 2)) - MAX_ROTATION_DEG;
      const scalePercentage = (Math.random() * (SCALE_VARIATION_PERCENT * 2)) - SCALE_VARIATION_PERCENT;
      const scale = 1 + (scalePercentage / 100);

      // Calculate sticker's approximate center position
      let stickerBaseX = j * effectiveStickerSizePx.value;
      if (i % 2 !== 0) { // Apply row offset for odd rows
        stickerBaseX -= rowOffsetPx.value;
      }
      const stickerCenterX = stickerBaseX + VISUAL_STICKER_SIZE_PX / 2;
      const stickerCenterY = i * effectiveStickerSizePx.value + VISUAL_STICKER_SIZE_PX / 2;

      // Calculate distance from viewport center
      const deltaX = stickerCenterX - viewportCenterX;
      const deltaY = stickerCenterY - viewportCenterY;
      const distanceFromViewportCenter = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      // Normalize distance (0 at center, 1 at maxPossibleDistance or further)
      let normalizedDistance = distanceFromViewportCenter / maxPossibleDistance;
      normalizedDistance = Math.min(normalizedDistance, 1); // Clamp at 1

      // Calculate opacity: more opaque at edges (normalizedDistance = 1), more transparent at center (normalizedDistance = 0)
      const individualOpacity = MIN_INDIVIDUAL_OPACITY_CENTER +
        (MAX_INDIVIDUAL_OPACITY_EDGE - MIN_INDIVIDUAL_OPACITY_CENTER) * normalizedDistance;

      currentRow.push({ src: selectedSrc, angle, scale, opacity: individualOpacity });
      lastStickerSrc = selectedSrc;
    }
    newRowsData.push(currentRow);
  }
  stickerRows.value = newRowsData;
}

onMounted(() => {
  generateStickerLayout();
  // Consider if you need to regenerate on resize. For a background,
  // one-time generation is often fine. If so, uncomment the listener.
  // window.addEventListener('resize', generateStickerLayout);
});

// onUnmounted(() => {
//   window.removeEventListener('resize', generateStickerLayout);
// });
</script>

<style scoped>
.sticker-background-container {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  opacity: v-bind(STICKER_OPACITY); /* Global opacity for the entire sticker layer */
  pointer-events: none;
}

.sticker-row {
  display: flex;
  flex-wrap: nowrap;
  gap: v-bind(GAP_BETWEEN_ITEMS_PX + 'px');
  margin-bottom: v-bind(GAP_BETWEEN_ITEMS_PX + 'px');
  width: max-content;
}

.sticker-item {
  width: v-bind(VISUAL_STICKER_SIZE_PX + 'px');
  height: v-bind(VISUAL_STICKER_SIZE_PX + 'px');
  object-fit: contain;
  flex-shrink: 0;
  /* Grayscale and blur are still good for integration */
  /* Dynamic opacity is now applied via inline style */
  /* transform-origin: center center; */ /* Default, usually not needed to specify */
}
</style>