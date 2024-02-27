const express = require ('express')

const app = express()

const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
    return res.json({msg:'running...'})
})

app.listen(port, () => {
    console.log(`running @localhost:${port}`)
})