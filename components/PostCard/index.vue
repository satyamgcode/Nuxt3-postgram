<script setup lang="ts">
import type { Post } from '@/types/post'

defineProps<{ post: Post }>()
</script>

<template>
  <NuxtLink :to="`/posts/${post.id}`" class="block p-4 border rounded-lg shadow hover:bg-gray-100">
    <h2 class="text-xl font-semibold text-gray-800">{{ post.title }}</h2>
    <p class="text-gray-600 mt-4">{{ post.body.substring(0, 40) }}...</p>
    <p class="align-text-bottom text-blue-500 py-2">click to explore full post</p>
  </NuxtLink>
</template>
