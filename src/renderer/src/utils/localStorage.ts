export function setLocalStorage(key: string, value: any) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}

export function getLocalStorage<T>(key: string) {
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value || '') as T
  } catch {
    return value as T
  }
}