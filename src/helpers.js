import fs from 'fs'
import { echo, to } from 'shelljs'

export const readJSON = (location) => JSON.parse(fs.readFileSync(location))
export const writeJSON = (location, obj) => echo(JSON.stringify(obj, null, 2)).to(location)
export const getRCJson = () => readJSON(`${__dirname.split('node_modules')[0]}/.gwrc`)
export const typeValidator = (val, key, type) => val.constructor === type? true: `please provide a valid ${key}`
