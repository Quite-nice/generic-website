export const typeValidator = (val, key, type) => val.constructor === type? true: `please provide a valid ${key}`
