<template>
  <div class="mt-10 flex flex-wrap justify-center gap-3">
    <!-- Botones de filtros -->
    <button class="bg-[#5C7AEA] hover:bg-[#4B66D4] text-white font-light px-3 py-1 rounded-lg flex items-center gap-2">
      Tipo de Vehículo
      <ChevronDownIcon class="h-3 w-4" />
    </button>

    <button class="bg-[#5C7AEA] hover:bg-[#4B66D4] text-white font-light px-3 py-2 rounded-lg flex items-center gap-2">
      Pasajeros
      <ChevronDownIcon class="h-3 w-4" />
    </button>

    <button class="bg-[#5C7AEA] hover:bg-[#4B66D4] text-white font-light px-3 py-2 rounded-lg flex items-center gap-2">
      Precio
      <ChevronDownIcon class="h-3 w-4" />
    </button>

    <button class="bg-[#5C7AEA] hover:bg-[#4B66D4] text-white font-light px-3 py-2 rounded-lg flex items-center gap-2">
      Maletas
      <ChevronDownIcon class="h-3 w-4" />
    </button>

    <button class="bg-[#5C7AEA] hover:bg-[#4B66D4] text-white font-light px-3 py-2 rounded-lg flex items-center gap-2">
      Equipamiento
      <ChevronDownIcon class="h-3 w-4" />
    </button>

    <!-- Botón de ícono (lista) -->
    <button class="bg-[#5C7AEA] hover:bg-[#4B66D4] text-white px-4 py-2 rounded-lg flex items-center">
      <Bars3BottomLeftIcon class="h-5 w-5" />
    </button>
  </div>
</template>

<script setup>
import { ChevronDownIcon, Bars3BottomLeftIcon } from '@heroicons/vue/24/solid'
</script>
