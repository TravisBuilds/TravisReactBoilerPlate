const express = require('express')
const router = express.Router()
const passport = require('passport')





//@desc Auth with Google
//@route GET /auth/google
// router.get('/google', passport.authenticate('google', {scope:['profile']}));
router.get('/google', passport.authenticate('google', {scope: ['profile']}));



//@desc Google auth callback
//@route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect:'/'}), (req,res)=> {
    res.redirect('/profile')
});


//@desc Google auth logout
//@route GET /auth/logout
router.get('/logout', (req,res)=> {
    user = {};
    console.log("logging out ");
    res.redirect('/')

});

module.exports = router