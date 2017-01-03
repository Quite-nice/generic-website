import inquirer from 'inquirer'

import { typeValidator, readJSON, writeJSON } from '../../helpers'

export const add = (field) => {
  const generic = readJSON('./.generic.json')

  inquirer.prompt([{type: 'input', name: field, message: `${field}: `,
  validator: (val) => typeValidator(val, field, String)}]).then((answer) => {
    generic[field] = answer[field]
    writeJSON('./.generic.json', generic)
  })
}
