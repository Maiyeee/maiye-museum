// Apply the theme before React or styles load to avoid a light flash on reload.
(() => {
  const key = 'maiye-museum-theme'
  const root = document.documentElement
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const valid = value => value === 'dark' || value === 'light'
  let preference = null
  try {
    const saved = window.localStorage.getItem(key)
    if (valid(saved)) preference = saved
  } catch { /* The switch still works when browser storage is unavailable. */ }

  function apply() {
    const theme = preference ?? (media.matches ? 'dark' : 'light')
    root.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#1b1a17' : '#f7f5ef')
    window.dispatchEvent(new Event('museum-theme-change'))
  }

  window.museumTheme = Object.freeze({
    get: () => root.dataset.theme,
    set(theme) {
      if (!valid(theme)) return
      preference = theme
      try { window.localStorage.setItem(key, theme) } catch { /* Keep the in-memory preference. */ }
      apply()
    },
  })

  media.addEventListener('change', () => { if (preference === null) apply() })
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return
    let value = event.newValue
    if (event.key === null) value = null
    preference = valid(value) ? value : null
    apply()
  })
  apply()
})()
