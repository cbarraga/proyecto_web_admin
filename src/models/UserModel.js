const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({

    perfil: { type: String, required: true },
    identificacion: { type: Number, required: true, unique: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    carrera: { type: String },
    celular: { type: Number },
    email: { type: String },
    username: { type: String }, 
    password: { type: String }, 
    status: { type: String, required: true }, 
    registrado: { type: Date, required: true }
    
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;