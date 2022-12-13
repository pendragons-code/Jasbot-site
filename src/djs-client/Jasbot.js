const { Client, Events, GatewayIntentBits } = require("discord.js")
const { QuickDB } = require("quick.db")
const env = require("dotenv").config()
const db = new QuickDB()
const token = process.env.token
const Jasbot = new Client({ intents: [GatewayIntentBits.Guilds] })
Jasbot.login(token)

Jasbot.once(Events.ClientReady, async Jasbot => {
	console.log(`Client ready and logged in as ${Jasbot.user.tag}`)
	await db.set("guildSize", Jasbot.guilds.cache.size)
	setInterval( async function() {
		db.set("guildSize", Jasbot.guilds.cache.size)
	}, 60000)
})
module.exports = { db }
