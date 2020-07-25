const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(bot, message, args) => {

let user = message.mentions.member.first()

if(!user) return message.channel.send("Please mention someone.")


if(msg.member.id !== '') return message.channel.send('Your not authorized.')


let data = await db.fetch(`blacklisted_${user.id}`)


let reason = await db.fetch(`blacklistedreason_${user.id}`)


if(data === null) data = "User has no history of a blacklist"
if(reason === null) reason = "null"


let bldata = new Discord.MessageEmbed()


.setTitle("Blacklisted User Data")


.addField("User", `${user}`)


.addField("Reason for Blacklist", reason, true)


.setColor('RANDOM')


message.author.send(bldata)



}
