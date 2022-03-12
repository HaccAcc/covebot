const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", (member) => {
  member.guild.channels
    .get("802505547043569665")
    .send("WELCOME TO COVE GIRLS ❤");
});

client.login("OTUyMjI1NDMwNzE3NDcyNzg5.Yiy7Cg.N7u1u5QNQswOaiPNBwL38V-EzZM");