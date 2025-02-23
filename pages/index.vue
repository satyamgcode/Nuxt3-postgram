<script setup lang="ts">
import heroImage from '@/assets/images/post_news.jpg'

</script>

<template>
  
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <div class="relative h-[90vh] flex items-center justify-center">
      <img
        :src="heroImage" 
        alt="Hero Image" 
        class="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div class="relative text-center px-6">
        <h1 class="text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome to <span class="text-blue-300">PostGram</span>
        </h1>
        <p class="text-lg text-gray-300 mt-3">
          Discover amazing posts, stories, and insights from around the world.
        </p>
        <NuxtLink 
          to="/posts" 
          class="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-400 transition rounded-lg shadow-lg"
        >
          📜 Explore Posts
        </NuxtLink>
      </div>
    </div>

    <!-- About Section -->
    <section class="py-16 px-6 text-center">
      <h2 class="text-4xl font-bold text-blue-300">What is PostGram?</h2>
      <p class="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
        PostGram is a platform where you can find and share insightful posts 
        on various topics. From technology to lifestyle, we bring you the 
        best content curated for you.
      </p>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-800 text-center">
      <h2 class="sm:text-3xl text-2xl font-bold text-blue-300 p-2">Why Choose PostGram?</h2>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-blue-200">🌍 Global Content</h3>
          <p class="text-gray-300 mt-2">
            Read posts from people all over the world and gain new perspectives.
          </p>
        </div>
        <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-blue-200">🚀 Fast & Responsive</h3>
          <p class="text-gray-300 mt-2">
            Powered by Nuxt 3 and Tailwind CSS, PostGram is blazingly fast and smooth.
          </p>
        </div>
        <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-blue-200">✍️ Easy to Use</h3>
          <p class="text-gray-300 mt-2">
            Simple, elegant UI with easy navigation to explore posts effortlessly.
          </p>
        </div>
      </div>
    </section>
    
  </div>
</template>
