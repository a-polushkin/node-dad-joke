const getJoke = require('./src/getJoke');

const myArgs = process.argv.slice(2);
if (myArgs.length === 0){
    getJoke.random()
}
else {
switch (myArgs[0]){
    case '--searchTerm':
        console.log(`Searching for ${myArgs[1]}`);
        break;
    case '--leaderboard':
        console.log('Most popular joke');
        break;
    default:
        console.log('This command is unknown');
}
}
