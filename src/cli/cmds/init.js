import { touch } from 'shelljs'
import inquirer from 'inquirer'

const chain = [
  {
    type: 'input', name: 'title', message: 'title: ', validate: (val) => val.constructor === String?true: 'please provide a valid title'
  }
]

export const init = () => {
  // CREATE SUMMARY FILE
  touch('.generic.json')
  console.log(require('./statics').explain.init)

  // FILL OUT THE SUMMARY FILE
  inquirer.prompt(chain).then((res) => console.log(JSON.stringify(res)))

}
