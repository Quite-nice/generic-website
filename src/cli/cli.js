#! /usr/bin/env node
import yargs from 'yargs'
import { init, change, add, deploy, generate } from './cmds'

const argv = yargs.usage("$0 command")
  .command("init", "create a new generic website")
  .command("change <field>", "update any field with a new value")
  .command("add", "add a new key and value", (yargs) => (
    yargs
      .option("s", {alias: "section", describe: "add a section"})
      .option("e", {alias: "element", describe: "add an element to a section"})
      .option("f", {alias: "field", describe: "provide a field name"})
      .demandOption(['f'], "Please provide a field name, it is required.")
      .help("h").alias("h", "help")
  ))
  .command("deploy", "deploy your website", (yargs) => (
    yargs.option("p", {alias: "port", describe: "port to deploy your site (default is 3000)"})
  ))
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv

switch (argv._[0]) {
  case 'init': init(); break
  case 'change': change(argv.field); break
  case 'add': add(argv); break
  case 'deploy': deploy(argv); break
}
