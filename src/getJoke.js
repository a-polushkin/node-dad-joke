const https = require("https");
const storage = require("./storage");
const utils = require("./utils");

const getJoke = {
  random: () => {
    const options = {
      hostname: "icanhazdadjoke.com",
      method: "GET",
      path: "/",
      headers: {
        Accept: "application/json",
      },
    };
    https
      .get(options, (resp) => {
        let data = "";
        // A chunk of data has been recieved.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          console.log(JSON.parse(data).joke);
          storage.saveToFile(data);
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  },
  search: (param) => {
    const options = {
      hostname: "icanhazdadjoke.com",
      method: "GET",
      path: `/search?limit=1&term=${param}`,
      headers: {
        Accept: "application/json",
      },
    };
    https
      .get(options, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          console.log(JSON.parse(data).results[0].joke);
          storage.saveToFile(data);
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  },
  leaderboard: () => {
    const array = storage.readFromFile();
    return utils.mostPopular(array).joke;
  },
};
module.exports = getJoke;
