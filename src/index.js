const server = require('./server/server.js')

const port = 3000 || process.env.PORT

server.listen(port, () => {
    console.log(`running @localhost:${port}`)
})