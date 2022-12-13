module.exports = {
	name: "/",
	async execute(req, res) {
		const { db } = require("../djs-client/Jasbot.js")
		let guildSize = await db.get("guildSize")
		if(!guildSize) guildSize = 0
		res.render("index.pug", { title: "Home", guildSize: guildSize })
	}
}
