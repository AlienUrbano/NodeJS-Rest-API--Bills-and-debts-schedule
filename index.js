const express = require ('express')

const app = express()

const port = 3000 || process.env.PORT

app.use(express.json())


// Schedules a bill or debt
app.post('/bill', (req, res) => {
    const data = req.body
    return res.json(data)
})

// Lists all bills and debts 
app.get('/bills', (req, res) => {
    return res.json({msg:'List bills...'})
})

// Details a bill or debt 
app.get('/bill/:id', (req, res) => {

    const id = req.params.id

    return res.json({msg:`detail of bill #${id}` })
})

// update a bill or debt 
app.put('/bill/:id', (req, res) => {

    const id = req.params.id

    return res.json({msg: `update bill #${id}`})
})

// delete a bill or debt 
app.delete('/bill/:id', (req, res) => {

    const id = req.params.id

    return res.json({msg: `delete bill #${id}`})
})

app.listen(port, () => {
    console.log(`running @localhost:${port}`)
})