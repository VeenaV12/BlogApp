const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT

require('./DB/mongodb')
const userRoute = require('./Routes/user_route')
const postRoute = require('./Routes/post_route')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use('/api', postRoute)
app.use('/user',userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const path=require('path');
app.use(express.static(path.join(__dirname+'../BlogAppFrontend/dist')));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '../BlogAppFrontend/dist/index.html'));
});