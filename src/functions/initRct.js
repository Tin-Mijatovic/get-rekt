const fs = require("fs");
module.exports = () => {
  fs.access("srcTest/containers", error => {
    if (error) {
      if (!fs.existsSync("srcTest")) {
        fs.mkdirSync("srcTest");
      }
      if (!fs.existsSync("srcTest/containers")) {
      fs.mkdirSync("srcTest/containers");
      }
    } else {
      console.log("File alredy exists");
    }
  });
  fs.access("srcTest/components", error => {
    if (error) {
      if (!fs.existsSync("srcTest")) {
        fs.mkdirSync("srcTest");
      }
      if (!fs.existsSync("srcTest/components")) {
      fs.mkdirSync("srcTest/components");
      }
    } else {
      console.log("File alredy exists");
    }
  });
};
