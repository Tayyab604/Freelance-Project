const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Chuti kr')
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})