import fs from 'fs'
import inquirer from 'inquirer'
import { echo, to } from 'shelljs'
import _ from 'lodash'

import { stringValidator, readJSON, createQuestions } from '../../helpers'

export const change = (field) => {
  const generic = readJSON('./.generic.json')

  inquirer.prompt(getQuestions(generic[field], field, '')).then((answer) => {
    generic[field] = answer
    echo(JSON.stringify(generic, null, 2)).to('./.generic.json')
  })
}

function getQuestions(current, field, path) {
  if (current.constructor === String) {
    return createQuestions([{name: field, val: stringValidator, default: current}])
  } else {
    const strings = Object.keys(current).filter((key) => current[key].constructor === String)
    const objects = _.difference(Object.keys(current), strings)

    const questions = [...strings.map((s) => ({type: 'input', name: `${path}${s}`, message: `${path}${s}: `, default: current[s], validate: (val) => stringValidator(val, `${path}${s}`)}))]
    for (const o of objects) {
      questions.push(...getQuestions(current[o], o, `${path}${o}.`))
    }
    return questions
  }
}
