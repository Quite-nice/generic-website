#! /usr/bin/env node
import yargs from 'yargs'

const argv = yargs.usage("$0 command")
  .command("init", "create a new generic website")
  .command("change", "update any field with a new value")
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv
