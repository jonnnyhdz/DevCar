<template>
  <div class=" md:px-2 lg:px-4">
    <div class="sticky top-0 z-50">
      <router-view name="navbar" />
    </div>
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script setup>
</script>
