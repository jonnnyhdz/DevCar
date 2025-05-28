<template>
  <section class="relative min-h-screen flex flex-col justify-start items-center text-white text-center overflow-visible pt-10 px-4">
    <!-- Fondo degradado circular -->
    <div
      class="absolute top-0 left-0 right-0 bottom-72 bg-gradient-to-b from-[#5C7AEA] to-blue-200 rounded-b-full origin-top">
    </div>

    <!-- Icono de palomita (tamaño equilibrado) -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="text-white z-10 mb-3"
      style="width: 6rem; height: 6rem;" 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5 13l5 5L20 7" />
    </svg>

    <!-- Título y mensaje -->
    <h1 class="text-5xl font-semibold z-8">COMPRA EXITOSA</h1>
    <p class="text-white font-semibold mt-6 z-10 text-sm max-w-lg">
      Se enviará a tu correo electrónico tu número de reserva el cuál será necesario para la recolección de tu vehículo
    </p>

    <!-- Botones -->
    <div class="flex flex-wrap gap-7 mt-8 z-10">
      <button
        @click="goToHome"
        class="bg-white text-black px-8 py-2 rounded-full shadow-md font-semibold text-sm"
      >
        Regresar a inicio
      </button>
      <button
        @click="goToSelect"
        class="bg-white text-black px-8 py-2 rounded-full shadow-md font-semibold text-sm"
      >
        Modificar compra
      </button>
    </div>

    <img
      src="@/assets/mazda.png"
      alt="Auto deportivo"
      class="mt-4 max-w-lg z-10"
    />
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push({ name: 'home' }) // Asegúrate de que esta ruta esté registrada como 'home'
}

const goToSelect = () => {
  router.push({ name: 'select' }) // Redirige a la vista donde se selecciona/modifica
}
</script>
