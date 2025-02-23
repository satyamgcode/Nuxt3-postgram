<script setup lang="ts">
import Navbar from '@/components/common/Navbar/index.vue'
import Footer from '@/components/common/Footer/index.vue'
</script>

<template>
  <div class="flex z-50 flex-col min-h-screen bg-gray-50">

    <Navbar />

    <main class="flex-1 mt-11">
      <slot />
    </main>

    <Footer />
  </div>
</template>
