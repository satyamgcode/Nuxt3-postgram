import { defineStore } from 'pinia'
import type { Post } from '@/types/post'

export const usePostStore = defineStore('postStore', () => {

  const posts = ref<Post[]>([])
  const lastFetched = ref<number>(0)

  const fetchPosts = async (): Promise<void> => {
    const now = Date.now()
    if (posts.value.length > 0 && now - lastFetched.value < 15 * 60 * 1000) return

    try {
      const { data, error } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
      if (error.value) throw new Error(error.value.message)

      posts.value = data.value || []
      lastFetched.value = now
    } catch (err) {
      console.error('Failed to fetch posts:', err)
    }
  }

  return { posts, lastFetched, fetchPosts }
})
