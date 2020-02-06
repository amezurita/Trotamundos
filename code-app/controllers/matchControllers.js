const user = require("../models/User")
const MongoClient = require('mongodb').MongoClient;



const preferencesView = (req, res, next) => {
  res.render("/preferences")
}

const userViews = (req, res) => {
  res.render("/privateViews/user")
}

const preferencesFill = (req, res) => {
  function fillDestination ({ newUser }, destino) {
    let newUserDest = destino;
    newUser.destino = newUserDest;
    }
  }

const filterView = (req, res) => {
  res.render("/filter")
}

const filter = (req, res) => {
    const result = user.find()
}





 module.exports = {preferencesView, userViews, preferencesFill, filterView, filter} 