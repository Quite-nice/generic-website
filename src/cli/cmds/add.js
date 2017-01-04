import inquirer from 'inquirer'

import { typeValidator, readJSON, writeJSON } from '../../helpers'

export const add = (arg) => {
  const { field, section } = arg

  const generic = readJSON('./.generic.json')

  if (section) {
    addSection(field)
  } else {
    inquirer.prompt([{type: 'input', name: field, message: `${field}: `,
    validator: (val) => typeValidator(val, field, String)}]).then((answer) => {
      generic[field] = answer[field]
      writeJSON('./.generic.json', generic)
    })
  }
}

function addSection(name) {
  const generic = readJSON('./.generic.json')
  if (!generic.sections) generic.sections = []

  const questions = [{name: 'rank', type: Number}, {name: 'color', type: String}, {name: 'elementCount', type: Number}, {name: 'description', type: String}].map((q) => (
    {type: 'input', name: q.name, message: `${q.name}: `, validator: (val) => typeValidator(val, q.name, q.type)}
  ))

  inquirer.prompt(questions).then((answer) => {
    answer.title = name
    generic.sections.push(answer)
    writeJSON('./.generic.json', generic)
  })
}
