const router = require('express').Router();
const { json } = require('body-parser');
const Data = require('../models/Data')




router.post("/blog/addblog", async(req,res)=>{
    // console.log(req.body)
    try {
        const title=req.body.title;
        const description=req.body.description;
        const imageurl=req.body.imageurl;
        // console.log(title,description,imageurl)
        const data= new Data({title,description,imageurl});
        data.save()
        res.json({
            status:"success",
            data:data,
            message:"Blog added Successfully"
        })
    } catch (error) {
        res.json({
            
            error:error
        })
        
    }
   
})
router.get("/blogs",async(req,res)=>{
    let data = await Data.find();

    res.json({
      status: "sucess",
      data: await data,
    });
  
})
router.get("/blog/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        let data=await Data.findOne({_id:id})
        res.json({
            status:"success",
            data:data,
            message:"data found"
        })
        
    } catch (error) {
        res.status(400).json({
            error:error
        })

    }
})

module.exports = router
