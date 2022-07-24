// Require necessary node modules
// Make the variables inside the .env element available to our Node project
require('dotenv').config();

const tmi = require('tmi.js');

// Setup connection configurations
// These include the channel, username and password
const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },

    // Lack of the identity tags makes the bot anonymous and able to fetch messages from the channel
    // for reading, supervison, spying or viewing purposes only
    identity: {
        username: `${process.env.TWITCH_BOT_USERNAME}`,
        password: `oauth:${process.env.TWITCH_OAUTH_TOKEN}`
    },
    channels: ['cooxybot']
});

// Connect to the channel specified using the setings found in the configurations
// Any error found shall be logged out in the console
client.connect().catch(console.error);


global.masterlove = null; // lets store last called time (milliseconds)
global.masterlul = null
global.masterrs = null

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.indexOf("masterLove") !== -1) {
    const nowMs = Date.now();
    if (
      !global.masterlove ||
      nowMs - global.masterlove >= 900 * 1000 // 100 seconds for example
    ) {
      global.masterlove = nowMs;
      client.say(channel,  `masterLove masterLove masterLove masterLove masterLove masterLove`);
    }
  }

  if (message.indexOf("masterLUL") !== -1) {
    const nowMs = Date.now();
    if (
      !global.masterlul ||
      nowMs - global.masterlul >= 900 * 1000 // 100 seconds for example
    ) {
      global.masterlul = nowMs;
      client.say(channel, `masterLUL masterLUL masterLUL masterLUL`);
    }
  }

  if (message.indexOf("masterRS") !== -1) {
    const nowMs = Date.now();
    if (
      !global.masterrs ||
      nowMs - global.masterrs >= 180 * 1000 // 100 seconds for example
    ) {
      global.masterrs = nowMs;
      client.say(channel, `masterRS masterRS masterRS masterRS masterRS masterRS`);
    }
  }


   




 /*client.on('message', (channel, tags, message, self) => {
    // Lack of this statement or it's inverse (!self) will make it in active
    if(self) return;
        /*if(message === 'masterHi' && tags.username == process.env.USERS) {
        client.say(channel, `@${tags.username} masterHi masterHi masterLove`);
        }

        if(message.indexOf("masterLove") !== -1){
            client.say(channel, `masterLove masterLove masterLove masterLove masterLove masterLove`);
        }

        if(message.indexOf("masterLUL") !== -1){
            client.say(channel, `masterLUL masterLUL masterLUL masterLUL`);
        }
*/
        

    // Create up a switch statement with some possible commands and their outputs
    // The input shall be converted to lowercase form first
    /*switch (message) {
        // Use tags to obtain the username of the one who has keyed in a certain input
     
        case result = text.includes("world");


        case text.includes('masterLove'):
            client.say(channel, `masterLove masterLove masterLove masterLove masterLove masterLove`);
            break;

        case 'masterLUL':
            client.say(channel, `masterLUL masterLUL masterLUL masterLUL`);
            break;
        
        case 'mastrHi':
            client.say(channel,`@${tags.username} masterHi masterHi`);
            break;
        default:
    }*/
});