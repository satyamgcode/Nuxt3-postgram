export function setCache<T>(key: string, data: T, ttlMinutes: number) {
    const cacheData = {
      data,
      expiry: Date.now() + ttlMinutes * 60 * 1000, // Expiry timestamp
    }
    localStorage.setItem(key, JSON.stringify(cacheData))
  }
  
  export function getCache<T>(key: string): T | null {
    const cacheItem = localStorage.getItem(key)
    if (!cacheItem) return null
  
    const { data, expiry } = JSON.parse(cacheItem)
    if (Date.now() > expiry) {
      localStorage.removeItem(key) // Remove expired cache
      return null
    }
  
    return data
  }
  