import fs from 'fs'

export const readJSON = (location) => JSON.parse(fs.readFileSync(location))
