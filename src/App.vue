<template>
  <div class="md:px-2 lg:px-4">
    <Loader ref="loader" />
    <div class="sticky top-0 z-50">
      <router-view name="navbar" />
    </div>
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Loader from '@/components/LoaderOverlay.vue'

const loader = ref()
const router = useRouter()

onMounted(() => {
  router.beforeEach((to, from, next) => {
    loader.value.show()
    next()
  })

  router.afterEach(() => {
    setTimeout(() => loader.value.hide(), 500)
  })
})
</script>
