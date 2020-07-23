//basic version to run a bot with cmd handler
//Be sure to have developer mode enabled.
const Discord = require('discord.js');



const bot = new Discord.Client();

bot.on('ready', () => {

console.log('test')

bot.user.setActivity("New", {type: "WATCHING"})

})

var prefix = `PREFIXHERE`;
bot.on(`message`, async message =>{
    let args = message.content.slice(prefix.length).trim().split(` `);
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return
    if(!message.content.startsWith(prefix)) return;

    try{
        let ops = {
            verfied: ["YOURID"]
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, ops);
    } catch(e) {
        console.log(e.stack);
    } 
})

//be sure to have a folder called commands then put your commands in there.

bot.login("")
