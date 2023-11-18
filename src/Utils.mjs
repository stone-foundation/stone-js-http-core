export const isFunction = (value) => {
  return typeof value === 'function'
}

export const isClass = (value) => {
  return isFunction(value) && /^\s*class/.test(value.toString())
}