var Usuario = require('./src/models/UsuarioModel');

var userValid = new Usuario({
    perfil: "invitado",
    identificacion: 1003458263,
    nombres: "Cristiano Ronaldo",
    apellidos: "Dos Santos Aveiro",
    carrera: "Futbolista",
    celular: 3012245979,
    email: "cr7@ejemplo.com",
    status: "activo",
    username: "cr7siu",
    password: "123456",
    registrado: new Date()
});

var userRequiredFields = new Usuario({
    carrera: "Futbolista",
    celular: 3012245979,
    email: "cr7@ejemplo.com",
    username: "cr7siu",
    password: "123456"
});

var userInvalidTypes = new Usuario({
    perfil: "invitado",
    identificacion: "100345826s3", //
    nombres: "Cristiano Ronaldo",
    apellidos: "Dos Santos Aveiro",
    carrera: "Futbolista",
    celular: "fr121", //
    email: "cr7@ejemplo.com",
    status: "activo",
    username: "cr7siu", 
    password: "123456",
    registrado: "fecha" //
});


const testUsers = {
    "userValid": userValid,
    "userRequiredFields": userRequiredFields,
    "userInvalidTypes": userInvalidTypes
}

module.exports = testUsers;

