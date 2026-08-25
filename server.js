const server = require('./src/app') // Create server
const database = require('./src/DB/db') // Connect to server
server.listen(3000, () => {
    console.log("Server started on port 3000")
})
database()