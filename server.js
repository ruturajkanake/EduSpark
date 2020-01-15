const path = require('path')
require('./routes/app')

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname)

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Express server started at port: ${port}.` )
})