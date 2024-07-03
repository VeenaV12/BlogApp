const express = require('express')
const {addUser, loginUser} = require('../Controller/userController')
const appRouter = express.Router()


appRouter.use(express.json())


appRouter.post('/signup', addUser)
appRouter.post('/login', loginUser)

module.exports = appRouter
