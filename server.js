const express = require('express')
const app = express()
// const path = require('path')

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))

require('./routing/apiRoutes.js')(app)

app.listen(3000, function() {
    console.log("Server running")
})