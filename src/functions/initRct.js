const fs = require("fs");
module.exports = () => {
  fs.access("src/containers", error => {
    if (error) {
      console.log("Create a CONTAINERS");
    } else {
      console.log("File alredy exists");
    }
  });
  fs.access("src/components", error => {
    if (error) {
      console.log("Create a COMPONENTS");
    } else {
      console.log("File alredy exists");
    }
  });
};
