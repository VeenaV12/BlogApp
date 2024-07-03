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

/*app.use(cors({
  origin:['https://blog-app-jppb.vercel.app'],
  credentials:true,
  methods:['GET','POST']
}))*/

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://blog-app-jppb-veena-s-projects.vercel.app/'); // Allow requests from your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow common HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow common headers
  next();
});

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