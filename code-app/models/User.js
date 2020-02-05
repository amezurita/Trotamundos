const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const userSchema = new Schema({
  nombre: String,
  apellido: String,
  mail: String,
  genero: {
    type: String,
    enum: ["m", "h"]
  },
  viaje: {
    type: String,
    enum: ["ext", "mex"]
  },
  edad_media: Number,
  presupuesto: {
    type: Number,
    enum: [5000, 10000, 15000]
  },
  destino: {"destino_ext": {
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
      "Alemania"
    ]
  }, "destino_mex": {
    type: String,
    enum: [
      "Riviera Maya",
      "Cancún",
      "Los Cabos",
      "Guadalajara",
      "Puerto Vallarta",
      "Monterrey",
      "Acapulco",
      "Nuevo Vallarta",
      "Mazatlán",
      "Puebla",
    ]
  }
},
  actividad: {
    type: String,
    enum: ["ecotur", "cult", "aven"]
  },
  facebookID: String,
})

userSchema.plugin(PLM, {
  usernameField: "email"
});
const User = mongoose.model("User", userSchema);
module.exports = User;

module.exports = model("User", userSchema)