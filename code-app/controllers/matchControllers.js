const user = require("../models/User")


exports.preferencesView=(req, res, next)=>{
  res.render("/preferences")
}

//exports.addAge=(req, res, next) =>{
 //const { email, password} = req.body 
 //const age = user.populate(user.age)}