<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <NuxtLink to="/" class="text-2xl font-bold text-blue-600">
        PostGram
      </NuxtLink>

      <nav class="space-x-6">
        <NuxtLink 
          to="/" 
          class="text-gray-700 hover:text-blue-500 transition"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/posts" 
          class="text-gray-700 hover:text-blue-500 transition"
        >
          Posts
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
