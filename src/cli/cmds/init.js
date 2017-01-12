import { touch, echo, to, mkdir, cp, cd, exec } from 'shelljs'
import inquirer from 'inquirer'

import { stringValidator, createQuestions, cleanObject } from '../../helpers'
import packageJSON from './config/package'

const chain = createQuestions([
  {name: 'head.title', message: `title: `, val: stringValidator, default: process.env.USER},
  {name: 'head.subtitle', message: 'subtitle: ', val: stringValidator},
  {name: 'head.description',message: 'description: ', val: stringValidator},
  {name: 'contact.mail',message: 'mail: ', val: stringValidator},
  {name: 'contact.github',message: 'github: ', val: stringValidator},
  {name: 'contact.facebook',message: 'facebook: ', val: stringValidator},
  {name: 'contact.twitter', message: 'twitter handler (no @ required): ', val: stringValidator},
  {name: 'style.accentColor', message: `accent color (e.g. 'yellow' or '#FF530D')`, val: stringValidator, default: 'grey'}
])

export const init = () => {
  // CREATE SUMMARY FILE
  mkdir('./.generic')
  touch('./.generic/.generic.json')
  cp('-R', `${__dirname.split('cli')[0]}/ui/*` , './.generic')
  echo(JSON.stringify(packageJSON, null, 2)).to('./.generic/package.json')
  cd('./.generic')
  exec('npm install -s')
  cd('..')

  // FILL OUT THE SUMMARY FILE
  console.log(require('./static-texts').explain.init)
  inquirer .prompt(chain).then((answer) => {
    echo(JSON.stringify(cleanObject(answer), null, 2)).to('./.generic/.generic.json')
  })
}
