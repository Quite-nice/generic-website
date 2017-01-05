import { exec } from 'shelljs'

import server from '../../server'

export let port = 3000
export const deploy = (args) => {
  if (parseInt(args.p)) port = parseInt(args.p)
  server()
}
