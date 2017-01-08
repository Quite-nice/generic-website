import inquirer from 'inquirer'
import _ from 'lodash'

import { intValidator, stringValidator, writeJSON, createQuestions } from '../../helpers'
import { readJSON } from '../../ui/helpers'

export const add = (arg) => {
  const { field, section, element } = arg
  const generic = readJSON('./.generic/.generic.json')

  if (section) {
    addSection(field)
  } else if (element) {
    addElement(field)
  }  else {
    let questions = createQuestions([{name: field, val: stringValidator}])
    if (field === true) questions = createQuestions([{name: 'key', val: stringValidator}, {name: 'value', val: stringValidator}])

    inquirer.prompt(questions).then((answer) => {
      if (!answer.key) answer = transformAnswer(answer)
      _.set(generic, answer.key, answer.value)

      //generic = answerField(generic, (answer.key? answer.key: field, (answer.value? answer.value: answer)))
      writeJSON('./.generic/.generic.json', generic)
    })
  }
}

function addField(answer) {
  const generic = readJSON('./.generic/.generic.json')
  let current = generic

  const keys = answer.key.split('.')
  for (const el of keys[keys.length - 1]) {
    if (!current[el]) current[el] = {}
    current = current[el]
  }
  current[keys[keys.length - 1]] = answer.value
  writeJSON('./.generic/.generic.json', generic)
}

function toKeyValue(obj) {
  let key = `${Object.keys(object)[0]}.`
  let object = obj[`${key.substr(0, key.length - 1)}`]
  while (object[key.substr(0, key.length - 1)].constructor === Object) {
    key += `${Object.keys(object)[0]}.`
    const keys = key.split('.')
    object = object[keys[keys.length - 1]]
  }

  const keys = key.split('.')

  return {
    key: key,
    value: object[keys[keys.length - 1]]
  }

}

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
