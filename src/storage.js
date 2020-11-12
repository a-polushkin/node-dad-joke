const fs = require("fs");

const fileStorage = {
  save: (data) => {
    fs.appendFile("jokes.txt", data + ";\n", function (err) {
      if (err) return console.log(err);
    });
  },
  read: () => {
    const data = fs.readFileSync("jokes.txt", "utf8");
    const array = data.split(";\n");
    //trim
    array.pop();
    return array;
  },
};

module.exports = fileStorage;
