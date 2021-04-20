const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const to = require('await-to-js').default;
const mongoose = require('mongoose')

router.get('/', async(req,res) => {

    let user,err;
    [err,user]=await to (Users.find());

    if(err){
      return  res.status(500).json({'Error ' : err})
    }
    return res.status(200).json(user)
  
})

router.get('/:id', async(req,res) => {
    let user,err;
    [err,user]=await to (Users.findById(req.params.id));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
})


router.post('/', async(req,res) => {
    const user = new Users({
        name: req.body.name,
        username: req.body.username,
        email:req.body.email,
        phone:req.body.phone,
        website:req.body.website
        // sub: req.body.sub
    })
user.id=user._id;
   const [err,users]=await to (user.save());

    if(err){
        return res.send(500).json({'error':err})
    }
    return res.send(200).json(users) 
})

router.put('/:id',async(req,res)=> {
    let user ;
    [err,user]= await to(Users.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
   
})
router.delete('/:id',async(req,res)=> {
    let user ;
    [err,user]= await to(Users.findOneAndDelete({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(user)
   
})

module.exports = router