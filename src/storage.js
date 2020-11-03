const fs = require("fs");

const storage = {
  saveToFile: (data) => {
    fs.appendFile("jokes.json", data, function (err) {
      if (err) return console.log(err);
    });
  },
  readFromFile: () => {
    const data = fs.readFileSync("jokes.json", "utf8",)
    const array = data.split("\n");
    array.pop();
   /* array.forEach((value, index, array) => {
      array[index] = JSON.parse(value);
    });*/
    return array;
  },
};

module.exports = storage;
