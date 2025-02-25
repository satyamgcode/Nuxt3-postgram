import { defineStore } from 'pinia'
import type { Post } from '@/types/post'
import { setCache, getCache } from '@/utils/cache'

export const usePostStore = defineStore('postStore', () => {
  const posts = ref<Post[]>([])
  const lastFetched = ref<number>(0)
  const cacheKey = 'cachedPosts'

  const fetchPosts = async (forceRefresh = false): Promise<void> => {
    const now = Date.now()

    // Check cache first (unless forceRefresh is true)
    if (!forceRefresh) {
      const cachedData = getCache<{ posts: Post[]; lastFetched: number }>(cacheKey)
      if (cachedData) {
        posts.value = cachedData.posts
        lastFetched.value = cachedData.lastFetched
        console.log('Using cached posts')
        return
      }
    }

    // Fetch fresh data
    try {
      console.log('Fetching new posts from API')
      const { data, error } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
      if (error.value) throw new Error(error.value.message)

      posts.value = data.value || []
      lastFetched.value = now

      // Store in cache for 15 minutes
      setCache(cacheKey, { posts: posts.value, lastFetched: now }, 15)
    } catch (err) {
      console.error('Failed to fetch posts:', err)
    }
  }

  return { posts, lastFetched, fetchPosts }
})
