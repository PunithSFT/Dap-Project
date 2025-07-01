const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

// Set EJS as templating engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Serve static files
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home - Sri Lanka Chauffeur Guide" })
})

app.get("/packages", (req, res) => {
  res.render("packages", { title: "Tour Packages - Sri Lanka Chauffeur Guide" })
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us - Sri Lanka Chauffeur Guide" })
})

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us - Sri Lanka Chauffeur Guide" })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
