import { exec } from 'shelljs'
import inquirer from 'inquirer'

import server from '../../server'
import { readJSON } from '../../helpers'
import { init } from './init'

export let port = 3000
export const deploy = (args) => {
  try {
    readJSON('./.generic.json')

    if (parseInt(args.p)) port = parseInt(args.p)
    server()
  } catch (e) {
    inquirer.prompt([{type: 'confirm', name: 'initialize', message: `Looks like you haven't yet initialized this project. Would you like to?`}])
      .then(({initialize}) => {
        if (initialize) {
          init()
        }
      })
  }
}
