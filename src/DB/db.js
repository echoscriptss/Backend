const database = require('mongoose')

async function connectTODB() {
    await database.connect('mongodb+srv://yt:3xVa1E5lS8E4C6eT@completebackend.oxtx3s9.mongodb.net/Notes')
    console.log('Connected to Database')
}
module.exports = connectTODB
