const { program } = require("commander");
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");

console.log("CLI Started");

program
  .command('com <name>')
  .description('Create a ReactJS component')
  .action((name) => {
    console.log(`Component created: ${name}`);
  });

program
  .command('con <name>')
  .description('Create a ReactJS container')
  .action((name) => {
    console.log(`Container created: ${name}`);
  });
program.parse(process.argv);

