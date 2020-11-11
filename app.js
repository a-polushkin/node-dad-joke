const jokeApi = require("./src/jokeApi");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter one of following commands:\n -r - for random joke\n -s - for searching by word\n -p - for most popular joke\n",
  (command) => {
    switch (command) {
      case "-r":
        console.log(`you entered ${command}`);
        jokeApi.random();
        rl.close();
        break;
      case "-s":
        console.log(`you entered ${command}`);
        rl.question("Enter the word for searching:\n",(word)=>{
          jokeApi.search(word);
          rl.close();
        })
        break;
      case "-p":
        console.log(jokeApi.leaderboard());
        rl.close();
        break;
      default:
        console.log("You entered the wrong command");
        rl.close();
    }
  }
);

rl.on("close", function () {
  process.exit(0);
});

/*const myArgs = process.argv.slice(2);
if (myArgs.length === 0) {
  jokeApi.random();
} else {
  switch (myArgs[0]) {
    case "--searchTerm":
      console.log(`Searching for ${myArgs[1]}:`);
      jokeApi.search(myArgs[1]);
      break;
    case "--leaderboard":
      console.log("Most popular joke:");
      console.log(jokeApi.leaderboard());
      break;
    default:
      console.log("This command is unknown");
  }
}*/
