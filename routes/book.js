const express = require('express')
const router = express.Router()
const Books = require('../models/book')
const to = require('await-to-js').default;
const mongoose = require('mongoose')
router.get('/', async(req,res) => {

    let book,err;
    [err,book]=await to (Books.find());

    if(err){
      return  res.status(500).json({'Error ' : err})
    }
    return res.status(200).json(book)
  
})

router.get('/:id', async(req,res) => {
    let book,err;
    [err,book]=await to (Books.findById(req.params.id));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(book)
})


router.post('/', async(req,res) => {
    const book = new Books({
        title: req.body.title,
        rating: req.body.rating,
        // sub: req.body.sub
    })
book.id=book._id;
   const [err,books]=await to (book.save());

    if(err){
        return res.send(500).json({'error':err})
    }
    return res.send(200).json(books) 
})

router.put('/:id',async(req,res)=> {
    let book ;
    [err,book]= await to(Books.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(book)
   
})
router.delete('/:id',async(req,res)=> {
    let book ;
    [err,book]= await to(Books.findOneAndDelete({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(book)
   
})
// router.delete('/:id', async(req,res) => {
//     const [err,delete_contact] = await to ( Books.findById(req.params.id))
//     if(err){
//         return res.status(500).json({"Error":err})
//     }
//     return res.status(200).json(delete_contact)
// })

module.exports = router