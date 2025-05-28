<template>
  <div class="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center text-gray-500">
    <!-- Origen -->
    <div class="flex flex-col items-center md:items-end">
      <div class="flex items-center gap-1 text-2xl font-light uppercase">
        <span>Cancún MX</span>
        <Icon icon="mdi:pencil-outline" class="w-6 h-5 text-gray-400" />
      </div>
      <span class="text-xs font-extralight">Jueves 26 / 09 / 2024 &nbsp; 10:00 am</span>
    </div>

    <Icon icon="mdi:chevron-right" class="w-10 h-10 text-gray-400 ml-10 mr-10" />

    <!-- Destino -->
    <div class="flex flex-col items-center md:items-start">
      <div class="flex items-center gap-1 text-2xl font-light uppercase">
        <span>Cancún MX</span>
        <Icon icon="mdi:pencil-outline" class="w-6 h-5 text-gray-400" />
      </div>
      <span class="text-xs font-extralight">Viernes 27 / 09 / 2024 &nbsp; 10:00 pm</span>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
