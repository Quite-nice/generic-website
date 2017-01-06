import { touch, echo, to } from 'shelljs'
import inquirer from 'inquirer'

import { stringValidator, createQuestions, cleanObject } from '../../helpers'

const chain = createQuestions([
  {name: 'head.title', message: `title: `, val: stringValidator, default: process.env.USER},
  {name: 'head.subtitle', message: 'subtitle: ', val: stringValidator},
  {name: 'head.description',message: 'description: ', val: stringValidator},
  {name: 'social.mail',message: 'mail: ', val: stringValidator},
  {name: 'social.github',message: 'github: ', val: stringValidator},
  {name: 'social.facebook',message: 'facebook: ', val: stringValidator},
  {name: 'social.twitter', message: 'twitter handler (no @ required): ', val: stringValidator},
  {name: 'style.accentColor', message: `accent color (e.g. 'yellow' or '#FF530D')`, val: stringValidator, default: 'grey'}
])

export const init = () => {
  // CREATE SUMMARY FILE
  touch('.generic.json')
  console.log(require('./static-texts').explain.init)

  // FILL OUT THE SUMMARY FILE
  inquirer.prompt(chain).then((answer) => {
    echo(JSON.stringify(cleanObject(answer), null, 2)).to('./.generic.json')
  })
}
