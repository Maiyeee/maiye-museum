import { useSyncExternalStore } from 'react'

const subscribe = callback => {
  window.addEventListener('museum-theme-change', callback)
  return () => window.removeEventListener('museum-theme-change', callback)
}
const getTheme = () => document.documentElement.dataset.theme ?? 'light'
const getServerTheme = () => 'light'

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme)
  const isDark = theme === 'dark'
  const label = isDark ? 'Light mode' : 'Dark mode'
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => window.museumTheme.set(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${label.toLowerCase()}`}
      title={`Switch to ${label.toLowerCase()}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isDark ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />}
      </svg>
      <span>{label}</span>
    </button>
  )
}
