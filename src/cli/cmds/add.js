import inquirer from 'inquirer'
import _ from 'lodash'

import { intValidator, stringValidator, writeJSON, createQuestions } from '../../helpers'
import { readJSON } from '../../ui/helpers'

export const add = (arg) => {
  const { field, section, element } = arg
  const generic = readJSON('./.generic/.generic.json')

  if (field.constructor === String && _.at(generic, field)[0]) {
    console.log(field, _.at(generic, field))
    inquirer.prompt([{type: 'confirm', name: 'new_field', message: 'Wups, looks like that field already exists, would you like to create another one?'}])
      .then((answer) => {
        if (answer.new_field) {
          add({field: true, section: arg.section, element: arg.element})
        }
    })
  } else {
    if (section) {
      addSection(field)
    } else if (element) {
      addElement(field)
    }  else {
      let questions = createQuestions([{name: field, val: stringValidator}])
      if (field === true) questions = createQuestions([{name: 'key', val: stringValidator}, {name: 'value', val: stringValidator}])

      inquirer.prompt(questions).then((answer) => {
        if (!answer.key) answer = {key: field, value: _.at(answer, field)[0]}

        _.set(generic, answer.key, answer.value)
        writeJSON('./.generic/.generic.json', generic)
      })
    }
  }
}

// ========================================================
// = Add inline TYPES
// ========================================================
function addSection(name) {
  const generic = readJSON('./.generic/.generic.json')

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
    writeJSON('./.generic/.generic.json', generic)
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
      if (answer.shouldcreate) addSection(section)
    })
  } else {
    const questions = createQuestions([
      {name: 'name',    val: stringValidator},
      {name: 'imgUrl',  val: stringValidator},
    ])
    inquirer.prompt(questions).then((answer) => {
      if (!s.elements) s.elements = []
      s.elements.push(answer)
      writeJSON('./.generic/.generic.json', generic)
    })
  }
}
