const { program } = require("commander");
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");

figlet("GET REKT", (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.cyan.bold(data));

  program.option('-c, --component <name>', 'Create React component')
  program.option('-t, --container <name>', 'Create React container')

  program.parse(process.argv);
  if(program.component) console.log('Create Component')
  else if(program.container) console.log('Create Container')
  else
    console.log('No args')

});
