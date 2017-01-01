import { touch, echo, to } from 'shelljs'
import inquirer from 'inquirer'

import { typeValidator } from './helpers'

const chain = [
  {type: 'input', name: 'title', message: 'title: ', validator: (val) => typeValidator(val, 'title', String)},
  {type: 'input', name: 'subtitle', message: 'subtitle: ', validator: (val) => typeValidator(val, 'subtitle', String)},
  {type: 'input', name: 'description', message: 'description: ', validator: (val) => typeValidator(val, 'message', String)},
  {type: 'input', name: 'mail', message: 'mail: ', validator: (val) => typeValidator(val, 'mail', String)},
  {type: 'input', name: 'github', message: 'github username: ', validator: (val) => typeValidator(val, 'github username', String)},
  {type: 'input', name: 'facebook', message: 'facebook username: ', validator: (val) => typeValidator(val, 'facebook username', String)},
  {type: 'input', name: 'twitter', message: 'twitter handler (no @ required): ', validator: (val) => typeValidator(val, 'twitter handler', String)},
  {type: 'input', name: 'accentColor', message: `accent color (e.g. 'yellow' or '#FF530D')`, validator: (val) => typeValidator(val, 'accent color', String)}
]

export const init = () => {
  // CREATE SUMMARY FILE
  touch('.generic.json')
  console.log(require('./static-texts').explain.init)

  // FILL OUT THE SUMMARY FILE
  inquirer.prompt(chain).then((res) => echo(JSON.stringify(res)).to('./.generic.json'))
}
