const fs = require('fs');

const storage = {
    saveToFile:(data)=>{
        fs.appendFile('jokes.json', data +',', function (err) {
            if (err) return console.log(err);
        });
    },
    readFromFile:()=>{
        const array= [];
        fs.readFile('jokes.json', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            console.log(data)
        });
    }
}

module.exports = storage;