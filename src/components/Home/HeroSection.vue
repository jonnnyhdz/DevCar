<template>
  <section class="relative overflow-hidden">
    <!-- FONDO CON DEGRADADO -->
<div
  class="absolute top-0 left-0 right-0 bottom-54 bg-gradient-to-b from-[#5C7AEA] to-blue-200 rounded-b-full origin-top">
</div>


    <div class="relative z-10">
      <div class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-white text-5xl font-semibold">DEV CAR RENTAL</h1>
        <p class="mt-3 text-white text-3xl font-thin">
          La mejor plataforma para rentar un auto
        </p>

        <!-- FORMULARIO -->
        <div class="mt-6 flex flex-col items-center space-y-4">
          <!-- FILA 1 -->
          <div class="flex gap-4">
            <!-- Pickup Location -->
            <div class="relative w-52">
              <span class="absolute inset-y-0 left-3 flex items-center text-blue-500">
                <MapPinIcon class="h-8 w-6" />
              </span>
              <select
                v-model="pickupLocation"
                class="w-full bg-white rounded-full shadow-lg pl-10 pr-4 py-3 appearance-none focus:outline-none font-extralight"
              >
                <option disabled value="">Recolección</option>
                <option>Cancún Mx</option>
              </select>
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon class="h-4 w-4 text-gray-400" />
              </span>
            </div>

            <!-- Pickup Date -->
            <div class="relative w-60">
              <span class="absolute inset-y-0 left-3 flex items-center text-blue-500">
                <CalendarDaysIcon class="h-5 w-5" />
              </span>
              <select
                v-model="pickupDate"
                class="w-full bg-white rounded-full shadow-lg pl-10 pr-4 py-3 appearance-none focus:outline-none font-extralight"
              >
                <option disabled value="">Fecha</option>
                <option>26/09/2024</option>
              </select>
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon class="h-4 w-4 text-gray-400" />
              </span>
            </div>

            <!-- Pickup Time -->
            <div class="relative w-48">
              <span class="absolute inset-y-0 left-3 flex items-center text-blue-500">
                <ClockIcon class="h-5 w-5" />
              </span>
              <select
                v-model="pickupTime"
                class="w-full bg-white rounded-full shadow-lg pl-10 pr-4 py-3 appearance-none focus:outline-none font-extralight"
              >
                <option disabled value="">Hora</option>
                <option>10:00 A.M.</option>
              </select>
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon class="h-4 w-4 text-gray-400" />
              </span>
            </div>
          </div>

          <!-- FILA 2 -->
          <div class="flex gap-4">
            <!-- Dropoff Location -->
            <div class="relative w-52">
              <span class="absolute inset-y-0 left-3 flex items-center text-blue-500">
                <MapPinIcon class="h-8 w-6" />
              </span>
              <select
                v-model="dropoffLocation"
                class="w-full bg-white rounded-full shadow-lg pl-10 pr-4 py-3 appearance-none focus:outline-none font-extralight"
              >
                <option disabled value="">Entrega</option>
                <option>Cancún Mx</option>
              </select>
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon class="h-4 w-4 text-gray-400" />
              </span>
            </div>

            <!-- Dropoff Date -->
            <div class="relative w-60">
              <span class="absolute inset-y-0 left-3 flex items-center text-blue-500">
                <CalendarDaysIcon class="h-5 w-5" />
              </span>
              <select
                v-model="dropoffDate"
                class="w-full bg-white rounded-full shadow-lg pl-10 pr-4 py-3 appearance-none focus:outline-none font-extralight"
              >
                <option disabled value="">Fecha</option>
                <option>27/09/2024</option>
              </select>
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon class="h-4 w-4 text-gray-400" />
              </span>
            </div>

            <!-- Dropoff Time -->
            <div class="relative w-48">
              <span class="absolute inset-y-0 left-3 flex items-center text-blue-500">
                <ClockIcon class="h-5 w-5" />
              </span>
              <select
                v-model="dropoffTime"
                class="w-full bg-white rounded-full shadow-lg pl-10 pr-4 py-3 appearance-none focus:outline-none font-extralight"
              >
                <option disabled value="">Hora</option>
                <option>10:00 A.M.</option>
              </select>
              <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon class="h-4 w-4 text-gray-400" />
              </span>
            </div>
          </div>

          <!-- BOTÓN Y IMAGEN -->
          <div class="mt-4 flex flex-col items-center space-y-4">
            <button
              @click="onSearch"
              class="bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-full px-14 py-3 transition"
            >
              Buscar
            </button>

<img
  src="@/assets/Porsche-911-GT3.png"
  alt="Auto deportivo"
  class="-mt-20 w-full max-w-2xl pointer-events-none"
/>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/solid'

import { useRouter } from 'vue-router'

const router = useRouter()

const pickupLocation  = ref('')
const pickupDate      = ref('')
const pickupTime      = ref('')
const dropoffLocation = ref('')
const dropoffDate     = ref('')
const dropoffTime     = ref('')

const onSearch = () => {
  console.log({
    pickupLocation: pickupLocation.value,
    pickupDate: pickupDate.value,
    pickupTime: pickupTime.value,
    dropoffLocation: dropoffLocation.value,
    dropoffDate: dropoffDate.value,
    dropoffTime: dropoffTime.value
  })

  router.push({ name: 'select' })
}
</script>
