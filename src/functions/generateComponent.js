const fs = require("fs");
const Handlebars = require("handlebars");
const template = require("../templates/templates.js");
const chalk = require("chalk");

module.exports = (name, type = "functional") => {
  let compiledHandlebars = Handlebars.compile(template[type]);
  let compiledIndex = Handlebars.compile(template.index);
  if (fs.existsSync(`srcTest/components`)) {
    if (!fs.existsSync(`srcTest/components/${name}`)) {
      fs.mkdirSync(`srcTest/components/${name}`);
      fs.writeFile(
        `srcTest/components/${name}/${name}.js`,
        compiledHandlebars({ name }),
        err => {
          if (err) {
            console.log(chalk.black.bgRed(" ERROR "));
            console.log(chalk.red.bold(`Can not create ${name}`));
          }
        }
      );
      fs.writeFile(
        `srcTest/components/${name}/index.js`,
        compiledIndex({ name }),
        err => {
          if (err) {
            console.log(chalk.black.bgRed(" ERROR "));
            console.log(chalk.red.bold("Can not create index.js"));
          }
        }
      );
    } else {
      console.log(chalk.black.bgRed(" ERROR "));
      console.log(chalk.yellowBright("Component with that name alredy exists"));
    }
  } else {
    console.log(chalk.red("Get-Rekt is not initialized"));
    console.log(chalk.cyan("Please run rkt --init"));
  }
};
