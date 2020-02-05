const express = require('express');
const router  = express.Router();
const passport = require("../config/passport")
const {preferencesViews} = require("../controllers/matchControllers")


const {signup,
   signUpView,
    login,
     loginView,
    logout} = require("../controllers/authControllers")
const {isAuthenticated,checkRole} = require("../middlewares")

/* GET home page */
router.get('/', (req, res, next) => {
res.render('index');
});

router.get('/signup',signUpView);
router.post('/signup',signup)
router.get("/login", loginView)
router.post("/login",
            passport.authenticate("local",{
              successRedirect:"/",
              failureRedirect:"/login",
              failureFlash:true
            }))

//preferences
router.get("/preferences", preferencesViews)

//user private view
router.get("/", )


            //Aqui va facebook
router.get('/auth/facebook', passport.authenticate('facebook'));
 router.get('/auth/facebook/callback',
   passport.authenticate('facebook', { successRedirect: '/preferences',
  failureRedirect: '/login' }, ));
  router.get("/logout",logout)





module.exports = router
