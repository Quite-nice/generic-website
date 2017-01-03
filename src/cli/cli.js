#! /usr/bin/env node
import yargs from 'yargs'
import { init, change, add, deploy } from './cmds'

const argv = yargs.usage("$0 command")
  .command("init", "create a new generic website")
  .command("change <field>", "update any field with a new value")
  .command("add <field>", "add a new key and value")
  .command("deploy", "deploy your website")
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv

switch (argv._[0]) {
  case 'init': init(); break
  case 'change': change(argv.field); break
  case 'add': add(argv.field); break
  case 'deploy': deploy(); break
}
