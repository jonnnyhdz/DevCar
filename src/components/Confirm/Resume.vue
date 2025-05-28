<template>
<section class="max-w-7xl mx-auto py-12 px-8 md:px-12 lg:px-18 grid grid-cols-1 lg:grid-cols-3 gap-10">
    <!-- Formulario -->
    <div class="lg:col-span-2">
      <h2 class="text-2xl font-semibold mb-6">¡Estás a punto! Completa tu información</h2>

      <form class="space-y-5 mt-16">
        <div>
          <label class="block font-semibold text-gray-500">Nombre</label>
          <input type="text" placeholder="Introduce tu nombre" class="font-semibold text-gray-400 text-sm w-full max-w-3/4 bg-gray-100 rounded-lg px-4 py-2 outline-none" />
        </div>

        <div>
          <label class="block font-semibold mb-1 text-gray-500">Apellidos</label>
          <input type="text" placeholder="Introduce tus apellidos" class="font-semibold text-gray-400 text-sm w-full max-w-3/4 bg-gray-100 rounded-lg px-4 py-2 outline-none" />
        </div>

        <div>
          <label class="block font-semibold mb-1 text-gray-500">Correo electrónico</label>
          <input type="email" placeholder="Introduce tu correo electrónico" class="font-semibold text-gray-400 text-sm w-full max-w-3/4 bg-gray-100 rounded-xl px-4 py-2 outline-none" />
        </div>

        <div>
          <label class="block font-semibold mb-1 text-gray-500">País</label>
          <input type="text" value="México" class="font-semibold text-gray-400 text-sm w-full max-w-3/4 bg-gray-100 rounded-xl px-4 py-2 outline-none" readonly />
        </div>

        <div>
          <label class="block font-semibold mb-1 text-gray-500">Teléfono</label>
          <input type="tel" placeholder="+52" class="font-semibold text-gray-400 text-sm w-full max-w-3/4 bg-gray-100 rounded-xl px-4 py-2 outline-none" />
        </div>

        <div class="flex items-start gap-2">
          <input type="checkbox" checked class="mt-1 accent-gray-400 w-5 h-5" />
          <p class="text-gray-500 text-base font-semibold">¿Te gustaría recibir información sobre nuestras últimas promociones?</p>
        </div>

        <div class="flex items-start gap-4">
          <input type="checkbox"  class="mt-1 accent-gray-400 w-5 h-5" />
          <div class="text-gray-500 text-base font-semibold space-y-2">
            <p>Estoy de acuerdo y acepto:</p>
<div class="list-none space-y-1">
  <a href="#" class="block underline text-sm">Aviso de privacidad</a>
  <a href="#" class="block underline text-sm">Términos y condiciones</a>
  <a href="#" class="block underline text-sm">Tabla de retenciones</a>
  <a href="#" class="block underline text-sm">Términos de depósito en garantía</a>
  <a href="#" class="block underline text-sm">Certificado de adhesión</a>
</div>

          </div>
        </div>
      </form>
    </div>

    <!-- Resumen -->
<aside class="w-[370px] bg-gray-200 rounded-2xl p-6 space-y-4 text-sm text-gray-800">
      <h3 class="font-semibold text-lg">Resumen de la reservación</h3>
      <div class="flex justify-between font-bold border-t-2 border-white-2 border-white pt-2">
        <span>Total de la renta:</span>
        <span>$751 MXN</span>
      </div>

      <div class="border-t-2 border-white-2 border-white pt-2">
        <p class="font-semibold">Recolección y entrega</p>
        <p class="text-gray-600 font-thin">26/9/2024 Cancún Mx</p>
        <p class="text-gray-600 font-thin">27/9/2024 Cancún Mx</p>
      </div>

<div class="border-t-2 border-white pt-2">
  <p class="font-semibold">Tu vehículo</p>
  <p class="text-gray-600 mb-3 font-thin">Mazda cx30</p>
  <img src="@/assets/mazda.png" alt="Mazda cx30" class="w-62 object-contain mx-auto" />
</div>


      <div class="border-t-2 border-white pt-2">
        <p class="font-semibold ">Tarifa base (Tiempo y kilometraje)</p>
        <div class="flex justify-between text-gray-600 font-thin">
          <span>Precio por 1 día</span>
          <span>$955 MXN</span>
        </div>
      </div>

      <div class="border-t-2 border-white pt-2">
        <p class="font-semibold">Promoción aplicada</p>
        <div class="flex justify-between text-gray-600 font-thin">
          <span>Descuento</span>
          <span class="text-gray-600">- $334 MXN</span>
        </div>
      </div>

      <div class="border-t-2 border-white pt-2">
        <p class="font-semibold">IVA y Cargos adicionales</p>
        <div class="flex justify-between text-gray-600 font-thin">
          <span>Concesión Placas</span>
          <span>$10 MXN</span>
        </div>
        <div class="flex justify-between text-gray-600 font-thin">
          <span>Cuota Locación</span>
          <span>$0 MXN</span>
        </div>
        <div class="flex justify-between text-gray-600 font-thin">
          <span>Cargo por servicio</span>
          <span>$20 MXN</span>
        </div>
      </div>

      <div class="border-t-2 border-white pt-2">
        <p class="font-semibold">Complementos</p>
        <div class="flex justify-between text-gray-600 font-thin">
          <span><input type="checkbox" checked class="mr-2 accent-gray-400 w-4 h-4">Conductor adicional</span>
          <span>$100 MXN</span>
        </div>
        <div class="flex justify-between text-gray-600 font-thin">
          <span><input type="checkbox" class="mr-2 accent-gray-400 w-4 h-4">Silla para niño</span>
          <span>$200 MXN</span>
        </div>
        <div class="flex justify-between text-gray-600 font-thin">
          <span><input type="checkbox" class="mr-2 accent-gray-400 w-4 h-4">Booster seat</span>
          <span>$200 MXN</span>
        </div>
      </div>

      <div class="border-t-2 border-white pt-2 flex justify-between font-bold">
        <span>Total de la renta</span>
        <span>$751 MXN</span>
      </div>

<button                
 @click="goToConfirm"
 class="w-40 bg-[#4B66D4] text-white py-2 rounded-xl font-semibold mt-6 mx-auto block">
  RESERVAR
</button>

    </aside>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToConfirm = () => {
  router.push({ name: 'succes' })
}
</script>
