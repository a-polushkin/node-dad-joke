const fs = require("fs");

const storage = {
  saveToFile: (data) => {
    fs.appendFile("jokes.txt", data + ";\n", function (err) {
      if (err) return console.log(err);
    });
  },
  readFromFile: () => {
    const data = fs.readFileSync("jokes.txt", "utf8");
    const array = data.split(";\n");
    array.pop();
    return array;
  },
};

module.exports = storage;
