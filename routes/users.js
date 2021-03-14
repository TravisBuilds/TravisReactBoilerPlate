const express = require('express');
const router = express.Router();

//Login
//@desc Login user
//@route GET /
router.get('/me', (req,res) => {
    if(req.user) {
        res.send(req.user); 
    }
    else{
        res.send({})
    }

});

//Logout 
//@desc Logout user
//@route GET /logout 
router.get("/logout", (req,res) => {
    if(user){
        res.redirect('/');
    }
})


module.exports = router;  