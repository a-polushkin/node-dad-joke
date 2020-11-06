const countDuplicate = (array) => {
  let count = {};
  array.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  return count;
};
const mostPopular = (array) => {
  const countedJokes = countDuplicate(array);
  let mostPopularCount = 0;
  let mostPopularJoke = null;
  for (const prop in countedJokes) {
    if (countedJokes[prop] > mostPopularCount) {
      mostPopularCount = countedJokes[prop];
      mostPopularJoke = prop;
    }
  }
  return mostPopularJoke;
};

const utils = {
  mostPopular: (array) => mostPopular(array),
};
module.exports = utils;
