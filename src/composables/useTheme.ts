import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

const theme = ref<Theme>('dark')

// Initialize from localStorage or system preference
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('theme') as Theme | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = stored || (prefersDark ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', theme.value)
}

// Watch for changes and persist
watch(theme, (newTheme) => {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return {
    theme,
    toggleTheme,
  }
}
