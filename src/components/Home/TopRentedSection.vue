<template>
  <section class="py-12 bg-white mx-12 md:mx-20 lg:mx-40">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-light text-gray-600 mb-6">Los más rentados</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        <div
          v-for="car in cars"
          :key="car.id"
          class="bg-gray-100 rounded-4xl p-6 h-68 flex flex-col"
        >
          <!-- Cabecera -->
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-lg font-light text-gray-600">{{ car.type }}</h3>
              <p class="text-sm font-thin text-gray-500">{{ car.model }}</p>
            </div>
            <font-awesome-icon
              :icon="['far','heart']"
              class="h-8 w-8 text-gray-400 hover:text-red-500 transition"
            />
          </div>

          <!-- Imagen del auto -->
          <img
            :src="car.image"
            :alt="car.model"
            class="w-full h-20 object-contain"
          />

          <!-- Características -->
          <div class="py-7 flex justify-between text-gray-500">
            <div class="flex items-center gap-1">
              <font-awesome-icon icon="gas-pump" class="h-5 w-5" />
              <span class="text-sm font-extralight">{{ car.fuel }}</span>
            </div>
<div class="flex items-center gap-1">
  <Icon icon="mdi:steering" class="w-5 h-5 text-gray-500" />
  <span class="text-sm font-extralight">{{ car.transmission }}</span>
</div>

            <div class="flex items-center gap-1">
              <font-awesome-icon icon="user-friends" class="h-5 w-5" />
              <span class="text-sm font-extralight">{{ car.passengers }}</span>
            </div>
          </div>

          <!-- Precio + botón -->
          <div class="mt-auto flex justify-between items-center">
            <span class="text-lg font-extralight text-gray-600">
              {{ car.price }}<span class="font-extralight text-base text-gray-400">/día</span>
            </span>
            <button
              class="bg-[#5C7AEA] hover:bg-[#4B66D4] text-white text-sm font-extralight px-6 py-1 rounded-full transition"
            >
              Rentar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import mazdaImage from '@/assets/mazda.png'
import { Icon } from '@iconify/vue'

const cars = [
  { id:1, type:'Premium', model:'Mazda cx30', image:mazdaImage, fuel:'70L', transmission:'Manual', passengers:5, price:'1500' },
  { id:2, type:'Premium', model:'Mazda cx30', image:mazdaImage, fuel:'70L', transmission:'Manual', passengers:5, price:'1500' },
  { id:3, type:'Premium', model:'Mazda cx30', image:mazdaImage, fuel:'70L', transmission:'Manual', passengers:5, price:'1500' },
  { id:4, type:'Premium', model:'Mazda cx30', image:mazdaImage, fuel:'70L', transmission:'Manual', passengers:5, price:'1500' },
]
</script>
