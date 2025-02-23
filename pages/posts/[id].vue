<script setup lang="ts">
import type { Post } from '@/types/post'

const route = useRoute()
const { data: post, error } = await useFetch<Post>(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
)

if (error.value) throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
</script>

<template>
  <div class="container mx-auto p-6">
    <NuxtLink to="/posts" class="text-blue-500">&larr; Back to Posts</NuxtLink>
    <div v-if="post" class="mt-4">
      <h1 class="text-3xl font-bold">{{ post.title }}</h1>
      <p class="mt-2">{{ post.body }}</p>
    </div>
    <div v-else class="text-red-500">Loading failed. Try again later.</div>
  </div>
</template>
