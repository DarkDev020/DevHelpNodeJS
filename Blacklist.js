
const Discord = require('discord.js')

const db = require('quick.db');


exports.run = async (bot, message, args) => {

if(msg.member.id !== 'INSERT ID') return message.channel.send("No can do, you must be a dev.")

let user = message.mentions.member.first()

if(!user) return message.channel.send("Please mention someone to blacklist.")


let reason = args.join(" ").slice(22)


let blacklisted = new MessageEmbed()
.setTitle("**Blacklisted User**")
.addField("User Blacklisted", `${user}`)
.addField("Blacklisted by", `${message.author.tag}`)
.addField("Reason", reason, true)
.addField("Date", `${message.createdAt}`)
.setColor('RED')

message.author.send(blacklisted)

db.set(`blacklisted_${user.id}`, user.id)


db.set(`blacklistedreason_${user.id}`, reason)
}

// Questions?

//To change the database where blacklisted ids are stored, change "blacklisted" to your new database name but keep the underscore.

//Want to change who can use this cmd? Here are a few methods. Checking if a member has a permission(Don't recommend this unless you can only execute the cmd in 1 server), fetching a database of developer ids(let example = await db.fetch(`developerid_${message.author.id}`)) name the database to whatever, then replace 'INSERT ID' with example. 

//How to add someone to the developer database?
// A: I will be making a open sourced code soon on how to do it, or you can try to figure it out on your own.

// Be sure to put these lines of code in every command that you have below that you want the blacklist cmd to work with.(Excluding blacklist cmd cause this is the cmd to blacklist people. :)  )

// Make sure you have quick.db declared. const db = require('quick.db') for each cmd.
// let bl = await db.fetch(`blacklisted_${message.author.id}`)

// if(message.author.id === bl) return message.channel.send("Sorry, but your blacklisted.")
