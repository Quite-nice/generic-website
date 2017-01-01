import fs from 'fs'
import inquirer from 'inquirer'
import { echo, to } from 'shelljs'

import { typeValidator } from './helpers'


export const change = (field) => {
  // GET CURRENT GENERIC
  const generic = JSON.parse(fs.readFileSync('./.generic.json'))

  // ASK THE QUESTION
  const question = [{type: 'input', name: field, message: `${field}: `, validator: (val) => typeValidator(val, field, String)}]
  inquirer.prompt(question).then((r) => {
    // CHANGE GENERIC
    generic[field] = r[field]

    //WRITE IT
    echo(JSON.stringify(generic)).to('./.generic.json')
  })
}
