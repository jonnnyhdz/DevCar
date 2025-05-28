<template>
    <nav class="w-full bg-[#4B66D4] text-white">
        <div class="container mx-auto flex items-center px-4 py-6">
            <div class="flex items-center space-x-2">
                <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-8" />
                <span class="font-semibold">DEV CAR RENTAL</span>
            </div>

            <div class="flex items-center space-x-10 ml-auto">
                <ul class="hidden md:flex">
                    <li class="mx-6"><a href="#" class="font-semibold hover:underline">Inicio</a></li>
                    <li class="mx-6"><a href="#" class="font-semibold hover:underline">Promociones</a></li>
                    <li class="mx-6"><a href="#" class="font-semibold hover:underline">Oficinas</a></li>
                    <li class="mx-6"><a href="#" class="font-semibold hover:underline">Iniciar sesión</a></li>
                </ul>


                <div class="hidden md:flex items-center space-x-2">
                    <img src="@/assets/mexico.webp" alt="ESP" class="h-6 w-6 rounded-full object-cover" />
                    <span class="font-semibold">ESP</span>
                    <select></select>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>
