const expect = require('chai').expect;
var testProjects = require('../proyectosExample');
var testUsers = require('../usuariosExample');

// Testing
describe('Testing Database Models Validation', function(){

    context('#"Usuarios" Validation', function(){
        
        it('Should be valid', function( done ){
            testUsers.userValid.validate(function(err){
                expect(err).to.equal(null);
                done();
            });
        });

        it('Should have ALL required fields', function( done ){
            // Los campos requeridos en el test
            const reqFields = ['perfil', 'identificacion', 'nombres', 'apellidos', 'status', 'registrado'];
            testUsers.userRequiredFields.validate(function(err){
                reqFields.forEach(field =>{
                    expect(err.errors[field]).to.exist;
                });
                done();
            });
        });

        it('Should have field type validation', function( done ){
            // Los campos con tipos de dato inválido
            const invalidTypeFields = ['identificacion', 'celular', 'registrado']
            testUsers.userInvalidTypes.validate(function(err){
                invalidTypeFields.forEach(field =>{
                    expect(err.errors[field]).to.exist;
                });
                done();
            });
        });

    });

    context('#"Proyectos" Validation', function(){
        
        it('Should be valid', function( done ){
            testProjects.projectExample.validate(function(err){
                expect(err).to.equal(null);
                done();
            });
        });

        it('Should have ALL required fields', function( done ){
            const reqFields = ['nombre', 'periodo', 'descripcion', 'tipo', 'fecha_final', 'fecha_final', 'estado'];
            testProjects.projectRequiredFields.validate(function(err){
                reqFields.forEach(field =>{
                    expect(err.errors[field]).to.exist;
                });
                done();
            });
        });

        it('Should have field type validation', function( done ){
            const invalidTypeFields = ['nombre', 'fecha_inicial', 'fecha_final', 'fase'];
            testProjects.projectInvalidTypes.validate(function(err){
                invalidTypeFields.forEach(field =>{
                    expect(err.errors[field]).to.exist;
                });
                done();
            });
        });

    });
});

// testProjects.projectInvalidTypes.validate(function(err){
//     console.log(err.errors);
// });