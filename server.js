const express = require('express')
const app = express()
const { join } = require('path')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routing/apiRoutes.js')(app)

app.listen(3000, function() {
    console.log("Server running")
})