
const Discord = require("discord.js");

const db = require("quick.db");

const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

let user = message.mentions.member.first()

if (user.id === message.author.id) return message.channel.send("Can not add points to yourself.")

    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.

   
    // (Optional)random amount: Math.floor(Math.random() * 1000) + 1;





    let daily = await db.fetch(`dailyrep_${message.author.id}`);






    if (daily !== null && timeout - (Date.now() - daily) > 0) {

        let time = ms(timeout - (Date.now() - daily));



        message.channel.send(`You already added points to someone, you can come back and add more in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)

    } else {

    let embed = new Discord.MessageEmbed()

    .setAuthor(`Reputation System`, message.author.displayAvatarURL)

    .setColor("GREEN")

    .setDescription(`**Added Reputation**`)

    .addField(`Added`, 1)

    .addField("User", `${user}`, true)



    message.channel.send(embed)

    db.add(`reputation_${user.id}`, 1)

    db.set(`dailyrep_${message.author.id}`, Date.now())

        

    }



}
