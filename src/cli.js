#! /usr/bin/env node
import yargs from 'yargs'

const argv = yargs.usage("$0 command")
  .command("init", "create a new generic website", () => console.log('init'))
  .command("change", "update any field with a new value", () => console.log('change'))
  .command("add", "add a new key and value", () => console.log('add'))
  .command("deploy", "deploy your website", () => console.log('deploy'))
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv
