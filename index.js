#!/usr/bin/env node

const { program } = require("commander");
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");
const functions = require("./src/functions");

program.option("-c, --component <name>", "Create React component");
program.option("-t, --container <name>", "Create React container");
program.option("-i, --init", "Initialize RKT");

program.parse(process.argv);
if (program.component) functions.generateComponent(program.component);
else if (program.container) functions.generateContainer(program.container);
else if (program.init) functions.init();
else {
  figlet("GET REKT", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.cyan.bold(data));

    inquirer
      .prompt([
        {
          type: "list",
          name: "create",
          message: "What would you like to create?",
          choices: ["Component", "Container"]
        },
        {
          type: "list",
          name: "type",
          message: "What type do you want?",
          choices: ["functional", "class"]
        },
        {
          type: "input",
          name: "name",
          message: "What name would you like?",
          default: function () {
            return "NewComponent";
          }
        }
      ])
      .then(answers => {
        if (answers.create === "Component") {
          functions.generateComponent(answers.name, answers.type);
        } else {
          functions.generateContainer(answers.name, answers.type);
        }
      });
  });
}
