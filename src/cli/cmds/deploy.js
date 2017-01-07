import { exec, cp, cd } from 'shelljs'
import inquirer from 'inquirer'

import server from '../../server'
import { readJSON } from '../../helpers'
import { init } from './init'

export let port = 3000
export const deploy = (args) => {
  try {
    cd('./.generic')
    readJSON('./.generic.json')
    // cp('-fR', `${__dirname.split('cli')[0]}/react`, './.generic')
    exec('webpack')
    cd('..')    
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
