const https = require("https");
const fileStorage = require("./storage");
const utils = require("./utils");

const getJoke = (options) => {
  https
    .get(options, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        fileStorage.save(data);
        console.log(data);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

const jokeApi = {
  random: () => {
    const options = {
      hostname: "icanhazdadjoke.com",
      method: "GET",
      path: "/",
      headers: {
        Accept: "text/plain",
      },
    };
    getJoke(options);
  },
  search: (param) => {
    const options = {
      hostname: "icanhazdadjoke.com",
      method: "GET",
      path: `/search?limit=1&term=${param}`,
      headers: {
        Accept: "text/plain",
      },
    };
    getJoke(options);
  },
  leaderboard: () => {
    const array = fileStorage.read();
    return utils.mostPopular(array);
  },
};
module.exports = jokeApi;
