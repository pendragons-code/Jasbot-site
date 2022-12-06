const { QuickDB } = require("quick.db")
const db = new QuickDB()
module.exports = { db }
//Not the best way to do it!
const bot = require("./djs-client/bot")
const express = require("express")
const path = require("path")
const env = require("dotenv").config()
const app = express()
const port = process.env.port || 3000



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


// main landing page
app.get("/", async (req, res) => {
	let guildSize = await db.get("guildSize")
	if(!guildSize) guildSize = 0
	res.render("index", { title: "Home", guildSize: guildSize })
})


//404 page
  app.use(function(req, res) {
    res.status(404)
    res.render("404", { title: "error: 404" });
  })


app.listen(port, () => {
	console.log(`listening to requests at http://localhost:${port}`)
})
