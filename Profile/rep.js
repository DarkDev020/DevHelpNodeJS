const Discord = require('discord.js')

const db = require('quick.db');


exports.run = async (bot, message, args) => {


let user = message.mentions.member.first() || message.author


let rep = await db.fetch(`reputation_${user.id}`)


let points = new MessageEmbed()

.setTitle("**Reputation Points**")

.addField("User", user, true)

.addField("Points", rep, true)

.setColor('RANDOM')

message.channel.send(points)

}
