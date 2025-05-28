<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
<svg class="h-28 w-28 text-blue-500 slow-spin" viewBox="0 0 50 50">
  <g transform="translate(25,25)">
    <g v-for="i in 12" :key="i" :transform="'rotate(' + (i * 30) + ')'">
      <rect x="-1.5" y="-20" width="3" height="6" rx="1.5" ry="1.5" fill="currentColor" :opacity="i / 12"/>
    </g>
  </g>
</svg>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

const show = () => visible.value = true
const hide = () => visible.value = false

defineExpose({ show, hide })
</script>

<style scoped>
@keyframes slow-spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.slow-spin {
  animation: slow-spin 2s linear infinite;
}
</style>
