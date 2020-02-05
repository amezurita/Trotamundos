const express = require('express');
const router  = express.Router();
const passport = require("../config/passport")
const {preferencesViews, userViews, preferencesFill, filterView} = require("../controllers/matchControllers")


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

//matching
router.get("/preferences", preferencesViews)
router.post("/preferences", preferencesFill)
router.get("/filter", filterView)
router.post("/filter", filter)
router.get("/user", userViews)


            //Aqui va facebook
router.get('/auth/facebook', passport.authenticate('facebook'));
 router.get('/auth/facebook/callback',
   passport.authenticate('facebook', { successRedirect: '/preferences',
  failureRedirect: '/login' }, ));
  router.get("/logout",logout)





module.exports = router
