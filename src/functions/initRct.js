const fs = require("fs");
const chalk = require("chalk");
module.exports = () => {
  fs.access("src/containers", error => {
    if (error) {
      if (!fs.existsSync("src")) {
        fs.mkdirSync("src");
      }
      if (!fs.existsSync("src/containers")) {
        fs.mkdirSync("src/containers");
      }
    } else {
      console.log(chalk.red('"src/containers" already exists'));
    }
  });
  fs.access("src/components", error => {
    if (error) {
      if (!fs.existsSync("src")) {
        fs.mkdirSync("src");
      }
      if (!fs.existsSync("src/components")) {
        fs.mkdirSync("src/components");
      }
    } else {
      console.log(chalk.red('"src/components" already exists'));
    }
  });
  console.log(chalk.green(`Get-Rekt initialized successfully`));
};
