import fs from 'fs'
import inquirer from 'inquirer'
import { echo, to } from 'shelljs'
import _ from 'lodash'

import { stringValidator, createQuestions } from '../../helpers'
import { readJSON } from '../../ui/helpers'
import { writeJSON } from '../../helpers'
import { add } from './add'

export const change = (field) => {
  const generic = readJSON('./.generic/.generic.json')

  if (!_.at(generic, field)[0]) {
    inquirer.prompt([{type: 'confirm', name: 'create', message: `Hmmm, I can't seem to find that field, would you like to create it?`}])
      .then((answer) => {
        if (answer.create) add({field: field})
      })
  } else {
    inquirer.prompt(getQuestions(_.at(generic, field)[0], field, '')).then((answer) => {
      if (!answer.key) answer = {key: field, value: _.at(answer, field)[0]}

      _.set(generic, answer.key, answer.value)
      writeJSON('./.generic/.generic.json', generic)
    })
  }
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
