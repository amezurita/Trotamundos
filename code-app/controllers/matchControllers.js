const user = require("../models/User")




const preferencesView = (req, res, next) => {
  res.render("/preferences")
}

const userViews = (req, res) => {
  res.render("/privateViews/user")
}

/*const preferencesFill = (req, res) => {
  function fillDestination ({ newUser }, destino) {
    let newUserDest = destino;
    jsonObj.members.viewers[newUser] = newValue
  }*/

const filterView = (req, res) => {
  res.render("/filter")
}

const filter = (req, res) => {

}



//exports.addAge=(req, res, next) =>{
 //const { email, password} = req.body 
 //const age = user.populate(user.age)}

 module.exports = {preferencesView, userViews, preferencesFill, filterView, filter} 