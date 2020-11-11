const https = require("https");
const fileStorage = require("./storage");
const utils = require("./utils");

const getJoke = (options) => {
  console.log('getHoke');
  https
    .get(options, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
        console.log(1);
      });
      console.log(data)
      resp.on("end", () => {
        console.log(data);
        fileStorage.save(data);
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
    console.log('random');
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
