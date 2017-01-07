import fs from 'fs'
import { echo, to } from 'shelljs'

export const writeJSON = (location, obj) => echo(JSON.stringify(obj, null, 2)).to(location)

export const stringValidator = (val, name) => val.constructor === String? true: `please provide a valid ${name}`
export const intValidator = (val, name) => isNaN(parseInt(val))? `please provide a number for ${name}`: true

export const createQuestions = (questions) => questions.map((q) => ({
  type: q.type || 'input',
  name: q.name,
  message: q.message || `${q.name}: `,
  validate: (val) => q.val(val, q.name),
  default: q.default,
}))

export const cleanObject = (obj) => {
  for (const key of Object.keys(obj)) {
    if (obj[key].constructor === Object) {
        obj[key] = cleanObject(obj[key])
        if (Object.keys(obj[key]).length === 0) delete obj[key]
    } else {
      if (obj[key] === "") {
        delete obj[key]
      }
    }
  }
  return obj
}
