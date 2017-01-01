#! /usr/bin/env node
import yargs from 'yargs'
import { init, change, add, deploy } from './cmds'

const argv = yargs.usage("$0 command")
  .command("init", "create a new generic website", init)
  .command("change", "update any field with a new value", change)
  .command("add", "add a new key and value", add)
  .command("deploy", "deploy your website", deploy)
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv
