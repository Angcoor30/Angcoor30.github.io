const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  empresa: {
    type: String,
    required: true,
  },
  sucursal: {
    type: String,
    required: true
  },
  persolic: {
    type: String,
    required: true
  },
  puesto: {
    type: String,
    required: true
  },
  horalleg: {
    type: String,
    required: true
  },
  horasal: {
    type: String,
    required: true
  },
  tdc: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  tipserv: {
    type: String,
    required: true
  },
  nota: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);