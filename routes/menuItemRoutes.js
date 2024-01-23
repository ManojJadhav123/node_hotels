const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menuItem');


router.post('/', async (req, res) =>{

    try{
        const data = req.body;
        const newMenu = new menuItem(data);

        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal sever error"});
    }
})

router.get('/' , async (req, res)=>{  
    try{
        const data = await menuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal sever error"});
    }
})

module.exports = router;
