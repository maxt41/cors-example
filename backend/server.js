const express = require('express') 
const cors = require('cors')

const app = express()
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use('/hello', require('./routes/hello'))

app.listen(1000, () => {console.log('http://localhost:1000')})