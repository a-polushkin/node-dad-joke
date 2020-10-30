const https = require('https')

const getJoke={
    random:()=>{
        const options = {
            hostname: 'icanhazdadjoke.com',
            method: 'GET',
            path:'/',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        https.get(options, (resp) => {
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(data);
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    },
    search:(param)=>{

    },
    leaderboard:()=>{

    },
}
module.exports = getJoke