const { Client, Events, GatewayIntentBits } = require("discord.js")
const env = require("dotenv").config()
const token = process.env.token
const Jasbot = new Client({ intents: [GatewayIntentBits.Guilds] })
const { db } = require("../index.js")
Jasbot.login(token)

Jasbot.once(Events.ClientReady, async Jasbot => {
	console.log(`Client ready and logged in as ${Jasbot.user.tag}`)
	await db.set("guildSize", Jasbot.guilds.cache.size)
	setInterval( async function() {
		db.set("guildSize", Jasbot.guilds.cache.size)
	}, 60000)
})

