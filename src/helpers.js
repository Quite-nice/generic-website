import fs from 'fs'

export const getRCJson = () => JSON.parse(fs.readFileSync(`${__dirname.split('node_modules')[0]}/.gwrc`))
