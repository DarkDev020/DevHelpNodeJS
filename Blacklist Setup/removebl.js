const Discord = require('discord.js')

const db = require('quick.db');


exports.run = async (bot, message, args) => {

if(msg.member.id !== 'INSERT ID') return message.channel.send("No can do, you must be a dev.")

let user = message.mentions.member.first()

if(!user) return message.channel.send("Please mention someone to Unblacklist.")



let reason = args.join(" ").slice(22)

if(!reason) return message.channel.send("Please provide a reason.")


let unblacklisted = new MessageEmbed()
.setTitle("**Unblacklisted User**")
.addField("User Unblacklisted", `${user}`)
.addField("By", `${message.author.tag}`)
.addField("Reason", reason, true)
.addField("Date", `${message.createdAt}`)
.setColor('GREEN')

message.author.send(unblacklisted)

user.send("You have been unblacklisted. Please do not get blacklisted again as it may be permenant.")

db.set(`blacklisted_${user.id}`, "null")


db.set(`blacklistedreason_${user.id}`, "null")
}

//Questions?

// Q: How does this work?
// A: It will fetch the blacklisted user database and then once you mention someone and provide a reason for the Unblacklist it will remove their ID from the list and they will be allowed to use the bot again.

// Q: Will this be updated?
// A: Yes, I attend to update all the blacklist features as needed, so feel free to report it in issues on github. "https://github.com/DarkDev020/DiscordDeveloperHelpNodeJS/issues"

// Q: Can I use this code without paying?
// A: Yes, it is open sourced, feel free to use it as needed but I would really appreciate if you give credit but it is not needed.

// Q: Can I contact you directly for any issues?
// A: Not at the moment, but later on I plan to make a support server. Until then please feel free to use the issues tab to report any issues, and I will help to the best of my capability. 
