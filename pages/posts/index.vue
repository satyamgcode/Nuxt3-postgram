<script setup lang="ts">
import { usePostStore } from '@/stores/usePostStore'

const postStore = usePostStore()
await postStore.fetchPosts()

</script>

<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-2">
        <NuxtLink to="/" class="text-blue-500">&larr; Back to home</NuxtLink>
      </div>
      <h1 class="text-4xl font-extrabold text-gray-800 text-center">
        📜 Explore <span class="text-blue-500">Latest Posts</span>
      </h1>
      <p class="text-gray-600 text-center mt-2">
        Discover the most recent stories and insights shared by users.
      </p>

      <div class="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <PostCard
          v-for="post in postStore.posts"
          :key="post.id"
          :post="post"
          class="transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>
