import fs from 'fs'
import { echo, to } from 'shelljs'

export const readJSON = (location) => JSON.parse(fs.readFileSync(location))
export const writeJSON = (location, obj) => echo(JSON.stringify(obj, null, 2)).to(location)
export const getRCJson = () => readJSON(`${__dirname.split('node_modules')[0]}/.gwrc`)

export const stringValidator = (val, name) => val.constructor === String? true: `please provide a valid ${name}`
export const intValidator = (val, name) => isNaN(parseInt(val))? `please provide a number for ${name}`: true

export const createQuestions = (questions) => questions.map((q) => ({
  type: q.type || 'input',
  name: q.name,
  message: `${q.name}: `,
  validate: (val) => q.val(val, q.name)
}))
