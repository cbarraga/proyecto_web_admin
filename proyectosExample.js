var Proyecto = require('./src/models/ProyectoModel');

// Proyecto de ejemplo
var projectExample = new Proyecto({
    nombre: "Desarrollo Aplicativo Web",
    periodo: "2021-2",
    descripcion: "Desarrollar una herramienta web con posibilidades infinitas... bla bla bla...",
    tipo: "Ingeniería aeroespacial",
    objetivos: {
        general: "Dominar el universo",
        especificos: [
            {value: "Encontrar alternativas al cambio climático"},
            {value: "Fomentar el desarrollo de la carrera espacial"},
            {value: "Colonizar el planeta vecino Marte"}
        ]
    },
    presupuesto: {
        asignado: 15000000,
        ejecutado: 20000,
    },
    fecha_inicial: new Date("2021-09-04T08:00:00"),
    fecha_final: new Date("2021-11-04T08:00:00"),
    director: [
        {documento: 1003458251, fecha_ingreso: new Date(), horas_proyecto: 1800}
    ],
    estado: "inicio", // [EJECUCIÓN, INICIO, CIERRE]
    fase: "desarrollo", // [INICIO, DESARROLLO, DOCUMENTACIÓN, ENTREGA, FINALIZACIÓN]
    avances: [
        {documento: 1003458261, fase: "ejecucion", reporte: "iniciamos etapa 1", fecha_reporte: new Date(), observacion: "xxx"},
        {documento: 1003458262, fase: "ejecucion", reporte: "iniciamos etapa 2", fecha_reporte: new Date(), observacion: "yyy"}
    ],
    miembros: [
        {documento: 1003458251, fecha_ingreso: new Date(), rol: "lider investigador"},
        {documento: 1003458262, fecha_ingreso: new Date(), rol: "estudiante investigador"},
        {documento: 1003458264, fecha_ingreso: new Date(), rol: "estudiante investigador"}
    ]
});

// Proyecto de ejemplo
var projectRequiredFields = new Proyecto({
    
    objetivos: {
        general: "Dominar el universo",
        especificos: [
            {value: "Encontrar alternativas al cambio climático"},
            {value: "Fomentar el desarrollo de la carrera espacial"},
            {value: "Colonizar el planeta vecino Marte"}
        ]
    },
    presupuesto: {
        asignado: 15000000,
        ejecutado: 20000,
    },
    director: [
        {documento: 1003458251, fecha_ingreso: new Date(), horas_proyecto: 1800}
    ],
    fase: "desarrollo", // [INICIO, DESARROLLO, DOCUMENTACIÓN, ENTREGA, FINALIZACIÓN]
    avances: [
        {documento: 1003458261, fase: "ejecucion", reporte: "iniciamos etapa 1", fecha_reporte: new Date(), observacion: "xxx"},
        {documento: 1003458262, fase: "ejecucion", reporte: "iniciamos etapa 2", fecha_reporte: new Date(), observacion: "yyy"}
    ],
    miembros: [
        {documento: 1003458251, fecha_ingreso: new Date(), rol: "lider investigador"},
        {documento: 1003458262, fecha_ingreso: new Date(), rol: "estudiante investigador"},
        {documento: 1003458264, fecha_ingreso: new Date(), rol: "estudiante investigador"}
    ]
});

// Proyecto de ejemplo
var projectInvalidTypes = new Proyecto({
    nombre: { type: String, valid: false}, // Expected: String
    periodo: "2021-2",
    descripcion: "Desarrollar una herramienta web con posibilidades infinitas... bla bla bla...",
    tipo: "Ingeniería aeroespacial",
    objetivos: {
        general: "Dominar el universo",
        especificos: [
            {value: "Encontrar alternativas al cambio climático"},
            {value: "Fomentar el desarrollo de la carrera espacial"},
            {value: "Colonizar el planeta vecino Marte"}
        ]
    },
    presupuesto: {
        asignado: 15000000,
        ejecutado: 20000,
    },
    fecha_inicial: "Invalid", // expected: Date
    fecha_final: "Invalid",   // expected: Date
    director: "Valid",      
    estado: "inicio", 
    fase: [],                 // expected: String  
    avances: "Valid",      
    miembros: "Valid"       
});

const testProjects = {
    "projectExample": projectExample,
    "projectRequiredFields": projectRequiredFields,
    "projectInvalidTypes": projectInvalidTypes
}

module.exports = testProjects;