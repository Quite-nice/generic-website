import inquirer from 'inquirer'

import { intValidator, stringValidator, readJSON, writeJSON, createQuestions } from '../../helpers'

export const add = (arg) => {
  const { field, section } = arg

  const generic = readJSON('./.generic.json')

  if (section) {
    addSection(field)
  } else {
    inquirer.prompt(createQuestions([{name: field, val: stringValidator}])).then((answer) => {
      generic[field] = answer[field]
      writeJSON('./.generic.json', generic)
    })
  }
}

function addSection(name) {
  const generic = readJSON('./.generic.json')
  if (!generic.sections) generic.sections = []
  const questions = createQuestions([
    {name: 'color',         val: stringValidator},
    {name: 'description',   val: stringValidator},
    {name: 'rank',          val: intValidator},
    {name: 'elementCount',  val: intValidator}])

  inquirer.prompt(questions).then((answer) => {
    answer.title = name
    generic.sections.push(answer)
    writeJSON('./.generic.json', generic)
  })
}
