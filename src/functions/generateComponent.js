const fs = require("fs");
const Handlebars = require("handlebars");
const template = require("../templates/templates.js");
const chalk = require("chalk");

module.exports = (name, type = "functional") => {
  console.log("test");
  let compiledHandlebars = Handlebars.compile(template[type]);
  let compiledIndex = Handlebars.compile(template.index);
  if (fs.existsSync(`src/components`)) {
    if (!fs.existsSync(`src/components/${name}`)) {
      fs.mkdirSync(`src/components/${name}`);
      fs.writeFile(
        `src/components/${name}/${name}.js`,
        compiledHandlebars({ name }),
        (err) => {
          if (err) {
            console.log(chalk.black.bgRed(" ERROR "));
            console.log(chalk.red.bold(`Can not create ${name}`));
          }
        }
      );
      fs.writeFile(
        `src/components/${name}/index.js`,
        compiledIndex({ name }),
        (err) => {
          if (err) {
            console.log(chalk.black.bgRed(" ERROR "));
            console.log(chalk.red.bold("Can not create index.js"));
          }
        }
      );
      console.log(chalk.green(`Component ${name} created!`));
    } else {
      console.log(chalk.black.bgRed(" ERROR "));
      console.log(chalk.yellowBright("Component with that name alredy exists"));
    }
  } else {
    console.log(chalk.red("Get-Rekt is not initialized"));
    console.log(chalk.cyan("Please run rkt --init"));
  }
};
