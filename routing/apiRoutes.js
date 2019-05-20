const friends = require('../app/friends.js')

module.exports = (app) => {
    app.get('/friends', (req, res) => {
        res.json(friends)
    })

    app.post('/friends', (req, res) => {
        friends.push(req.body)
        res.json('OK')
    })
}