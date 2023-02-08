const Discord = require("discord.js");
const client = new Discord.Client();
const keepAlive = require("./server")

client.on("ready", () => {
    console.log("Strap the belt! I'm ready to go!");
});


client.on("message", message => {
    // If user sends message Hi then reply with Hello
    if (message.content === "hi") {
        message.reply("Hewwo :3");
      console.log("Said Hewwo :3")
    }
});

keepAlive()

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);