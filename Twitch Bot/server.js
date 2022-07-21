require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: ['mastersnakou']
});

let loopInterval
  client.on('chat', (channel, userstate, message, self) => {
    console.log(`Message "${message}" received from ${userstate['display-name']}`)
    if (self) return
    const msg = message.split(' ')
    
    console.log('start $loop')
    loopInterval = setInterval(function () {
      client.say(channel, 'masterLove masterLove masterLove masterLove masterLove masterLove') // client.say(channel, msg[1]) // ?
    }, 36000000) // 60000ms = 60s = 1min
  })

  client.connect();