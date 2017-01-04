import inquirer from 'inquirer'
import _ from 'lodash'

import { intValidator, stringValidator, readJSON, writeJSON, createQuestions } from '../../helpers'

export const add = (arg) => {
  const { field, section, element } = arg

  const generic = readJSON('./.generic.json')

  if (section) {
    addSection(field)
  } else if (element) {
    addElement(field)
  }  else {
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
    // Possible extension could be a type field
  ])

  inquirer.prompt(questions).then((answer) => {
    answer.title = name
    generic.sections.push(answer)
    writeJSON('./.generic.json', generic)
  })
}

function addElement(section) {
  const generic = readJSON('./.generic.json')
  const s = _.find(generic.sections, {title: section})

  if (!s) {
    inquirer.prompt({
      type: 'confirm', name: 'shouldcreate',
      message: `no section with title "${section}" was found, would you like to create it?`})
    .then((answer) => {
      if (answer.shouldcreate) {
        addSection(section)
      }
    })
  } else {
    const questions = createQuestions([
      {name: 'name',    val: stringValidator},
      {name: 'imgUrl',  val: stringValidator},
    ])
    inquirer.prompt(questions).then((answer) => {
      if (!s.elements) s.elements = []
      s.elements.push(answer)
      writeJSON('./.generic.json', generic)
    })    
  }
}
