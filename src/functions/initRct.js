const fs = require("fs");
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
      console.log("File alredy exists");
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
      console.log("File alredy exists");
    }
  });
};
