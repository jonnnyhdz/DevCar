<template>
  <div class="bg-gray-100 rounded-3xl p-6 flex flex-col max-w-6xl mx-auto mt-10">
    <!-- Contenido superior -->
    <div class="flex justify-between items-start mt-6">
      <!-- Información del vehículo -->
      <div class="flex flex-col gap-3 items-start w-1/3 ml-12">
        <div>
          <h3 class="text-lg text-gray-800 font-light flex items-center gap-1">
            Premium
            <InformationCircleIcon class="h-5 w-5 text-gray-400" />
          </h3>
          <p class="text-gray-600 font-thin">Toyota Camry</p>
        </div>

        <img
          src="@/assets/mazda.png"
          alt="Toyota Camry"
          class="h-32 object-contain"
        />

        <div class="flex gap-6 mt-2 text-gray-400 text-sm">
          <div class="flex items-center gap-1">
            <FontAwesomeIcon icon="gas-pump" class="w-4 h-4" />
            70L
          </div>
          <div class="flex items-center gap-1">
            <Icon icon="mdi:steering" class="w-5 h-5 text-gray-400" />
            Manual
          </div>
          <div class="flex items-center gap-1">
            <FontAwesomeIcon icon="user-friends" class="w-4 h-4" />
            5
          </div>
        </div>
      </div>

      <div class="flex gap-8 justify-center items-end w-2/3">
        <!-- Pago en mostrador -->
        <div class="bg-gray-100 relative rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.2)] px-6 pt-16 pb-4 w-72 text-center">
          <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-72 h-12 bg-[#4B66D4] text-white text-sm font-semibold rounded-xl px-4 py-2 flex items-center justify-center shadow-md">
            Pago en mostrador
          </div>
          <div class="flex justify-center items-center gap-x-2 mt-3 text-sm text-black">
            <div class="line-through">$955 MXN</div>
            <div class="bg-[#4B66D4] text-white text-sm font-light px-3 py-0.5 rounded-lg">
              -30%
            </div>
          </div>
          <div class="mt-3 text-3xl font-light text-black">
            $621.00 <span class="text-base font-normal">MXN</span>
          </div>
            <button
                @click="goToConfirm"
                  class="mt-6 bg-[#4B66D4] text-white font-light py-2 px-12 rounded-xl text-sm">
                    RESERVAR
            </button>
        </div>

        <!-- Pago en línea -->
        <div class="bg-gray-100 relative rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.2)] px-6 pt-16 pb-4 w-72 text-center">
          <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-72 h-12 bg-[#4B66D4] text-white text-sm font-semibold rounded-xl px-4 py-2 flex items-center justify-center shadow-md">
            Pago en línea
          </div>
          <div class="flex justify-center items-center gap-x-2 mt-3 text-sm text-black px-2">
            <div class="line-through">$983 MXN</div>
            <div class="bg-[#4B66D4] text-white text-lg font-light px-3 py-0.5 rounded-lg">
              -60%
            </div>
          </div>
          <div class="mt-3 text-3xl font-light text-black">
            $393.00 <span class="text-base font-normal">MXN</span>
          </div>
          <button class="mt-6 bg-[#4B66D4] text-white font-light py-2 px-12 rounded-xl text-sm">
            RESERVAR
          </button>
        </div>
      </div>
    </div>
    <p class="text-center text-gray-400 mt-6 text-sm font-semibold ml-90">
      ¿Qué incluye mi tarifa?
    </p>
  </div>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Icon } from '@iconify/vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const goToConfirm = () => {
  router.push({ name: 'confirm' })
}


</script>
