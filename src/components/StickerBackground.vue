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
        :style="{ transform: `rotate(${sticker.angle}deg) scale(${sticker.scale})` }"
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
}

const stickerSources = [burritoIconUrl, tacoIconUrl, sandwichIconUrl];
const stickerRows = ref<Array<Array<StickerItem>>>([]);

// --- Configuration for sticker appearance ---
const VISUAL_STICKER_SIZE_PX = 32;
const GAP_BETWEEN_ITEMS_PX = 24;
const STICKER_OPACITY = 0.08;
const MAX_ROTATION_DEG = 30;        // Max random rotation in degrees (+/-)
const SCALE_VARIATION_PERCENT = 25; // Max random scale variation in percent (+/- from 100%)
// --- End Configuration ---

const effectiveStickerSizePx = computed(() => VISUAL_STICKER_SIZE_PX + GAP_BETWEEN_ITEMS_PX);
// Row offset calculation remains based on the *base* visual size for predictability
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

  // Calculate number of stickers based on the base size + gap
  const stickersPerRow = Math.floor(screenWidth / effectiveStickerSizePx.value) + 2;
  const numberOfRows = Math.floor(screenHeight / effectiveStickerSizePx.value) + 1;

  const newRowsData: Array<Array<StickerItem>> = [];
  
  for (let i = 0; i < numberOfRows; i++) {
    const currentRow: Array<StickerItem> = [];
    let lastStickerSrc: string | undefined = undefined;
    for (let j = 0; j < stickersPerRow; j++) {
      const selectedSrc = getRandomStickerSrc(lastStickerSrc);
      if (!selectedSrc) continue;

      // Random angle: -MAX_ROTATION_DEG to +MAX_ROTATION_DEG
      const angle = (Math.random() * (MAX_ROTATION_DEG * 2)) - MAX_ROTATION_DEG;
      
      // Random scale: 1 +/- (SCALE_VARIATION_PERCENT / 100)
      // e.g., for 25%, scale is between 0.75 and 1.25
      const scalePercentage = (Math.random() * (SCALE_VARIATION_PERCENT * 2)) - SCALE_VARIATION_PERCENT;
      const scale = 1 + (scalePercentage / 100);

      currentRow.push({ src: selectedSrc, angle, scale });
      lastStickerSrc = selectedSrc;
    }
    newRowsData.push(currentRow);
  }
  stickerRows.value = newRowsData;
}

onMounted(() => {
  generateStickerLayout();
  // window.addEventListener('resize', generateStickerLayout); // Optional: for dynamic resize
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
  opacity: v-bind(STICKER_OPACITY);
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
  filter: opacity(50%) blur(0.5px);
}
</style>