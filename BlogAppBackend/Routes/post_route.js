const express = require('express')
const blogRouter = express.Router()
const jwt = require('jsonwebtoken')

const posts = require('../Model/blogModel')

blogRouter.use(express.json())
blogRouter.use(express.urlencoded({extended:true}));

function verifyToken(req,res,next){
    let token = req.headers.token
    
    try{
        if(!token) throw 'Unauthorised access'
        let payload = jwt.verify(token,'checkApp')
        if(!payload) throw 'Unauthorised access'
        next()
    }
    catch(error){
        res.json({message:error})
    }
}

blogRouter.get('/blogs',verifyToken,async(req,res)=>{
    try {
        const data= await posts.find();
          res.status(200).send(data);
      } catch (error) {
          res.status(404).send('No data found');
      } 
})

blogRouter.post('/add',verifyToken,async(req,res)=>{
    try {
        var item=req.body;
        const data=new posts(item);
        const saveddata= await data.save();
        res.status(200).send('Post successful');
    } catch (error) {
        res.status(404).send('Post unsuccessful');
    }
})

module.exports = blogRouter