require("dotenv").config()

const snxData = require('synthetix-data');
const Discord = require("discord.js")
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

let trades = null;
let trades100 = null;
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.fetch('785320922278133800').then(c => {
        trades = c
    });
    client.channels.fetch('785321056197935124').then(c => {
        trades100 = c
    });
})



setTimeout(function () {
    try {
        snxData.synths.issuers({max: 5000}).then(result => {
            getAllWallets(result);
        });
    } catch (e) {
        console.log(e);
    }
}, 1000 * 2);

// const https = require('https');
// let votes = new Map();
// let choices = new Map();
// choices.set("1", "BigPenny");
// choices.set("2", "Danijel");
// choices.set("3", "Farmwell");
// choices.set("4", "Jackson");
// choices.set("5", "Spreek");
// choices.set("6", "Synthaman");
// choices.set("7", "justwanttoknowathing");
// choices.set("8", "Farmer Joe - The DeFi Oracle");
// choices.set("9", "Psybull");
// choices.set("10", "Kaleb");
// choices.set("11", "rubber duck");
// choices.set("12", "Akin");
// choices.set("13", "Samantha");
// choices.set("14", "Michael | Framework");
// choices.set("15", "Andy | Synthetix");
// choices.set("16", "Chevis");
// choices.set("17", "Simone ");
// choices.set("18", "TerraBellus");
// choices.set("19", "larpras");
//
//
// setTimeout(function () {
//     https.get('https://hub.snapshot.page/api/synthetixcouncil/proposal/QmPyFrvjPRzqsxCpcUFdHU2hWGWV4EJa99ahFATtTyxyZ6', (resp) => {
//         let data = '';
//
//         // A chunk of data has been recieved.
//         resp.on('data', (chunk) => {
//             data += chunk;
//         });
//
//         // The whole response has been received. Print out the result.
//         resp.on('end', () => {
//             try {
//                 let results = JSON.parse(data);
//                 let print = false;
//                 if (votes.size > 0) {
//                     print = true;
//                 }
//                 for (const result in results) {
//                     if (!votes.has(result)) {
//                         let vote = results[result];
//                         let voter = vote.address;
//                         if (votes.has(voter)) {
//                             let choice = votes.get(voter);
//                             if (choice != vote.msg.payload.choice) {
//                                 const exampleEmbed = new Discord.MessageEmbed();
//                                 exampleEmbed.setColor("00770f");
//                                 exampleEmbed.setTitle("Vote Changed");
//                                 exampleEmbed.setURL("https://council.synthetix.io/#/synthetixcouncil/proposal/QmPyFrvjPRzqsxCpcUFdHU2hWGWV4EJa99ahFATtTyxyZ6");
//                                 exampleEmbed.addField("From",
//                                     choices.get(choice));
//                                 exampleEmbed.addField("To",
//                                     choices.get(vote.msg.payload.choice));
//                                 exampleEmbed.addField("Voter",
//                                     voter);
//                                 if (print) {
//                                     channelGov.send(exampleEmbed);
//                                 }
//                             }
//                         }
//                         else{
//                             const exampleEmbed = new Discord.MessageEmbed();
//                             exampleEmbed.setColor("00770f");
//                             exampleEmbed.setTitle("New Vote");
//                             exampleEmbed.setURL("https://council.synthetix.io/#/synthetixcouncil/proposal/QmPyFrvjPRzqsxCpcUFdHU2hWGWV4EJa99ahFATtTyxyZ6");
//                             exampleEmbed.addField("For",
//                                 choices.get(vote.msg.payload.choice));
//                             exampleEmbed.addField("Voter",
//                                 voter);
//                             if (print) {
//                                 channelGov.send(exampleEmbed);
//                             }
//                         }
//                         votes.set(voter, vote.msg.payload.choice);
//
//                         if (process.env.REDIS_URL) {
//                             redisClient.set("votes", JSON.stringify([...votes]), function () {
//                             });
//                         }
//                     }
//                 }
//             } catch (e) {
//                 console.log(e);
//             }
//
//         });
//
//     }).on("error", (err) => {
//         console.log("Error: " + err.message);
//     });
//
// }, 10 * 1000);
