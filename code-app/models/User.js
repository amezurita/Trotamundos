const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const userSchema = new Schema({
  imagen: String,
  nombre: String,
  apellido: String,
  mail: String,
  genero: {
    type: String,
    enum: ["m", "h"]
  },
  viaje:["ext"],
  edad_media: Number,
  presupuesto: {
    type: Number,
    enum: [5000, 10000, 15000]
  },
  destino: {
    type: String,
    enum: [
      "Estados Unidos",
      "Canadá",
      "España",
      "Cuba",
      "Francia",
      "Japón",
      "Italia",
      "Colombia",
      "Reino Unido",
      "Alemania"]
    },
  actividad: {
    type: String,
    enum: ["ecotur", "cult", "aven"]
  },
  facebookID: String,
})

userSchema.plugin(PLM, {
  usernameField: "mail"
});
const User = mongoose.model("User", userSchema);
module.exports = User;

module.exports = model("User", userSchema)