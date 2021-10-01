const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProyectoSchema = new Schema({

    nombre: { type: String, required: true },
    periodo: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true },
    objetivos: { type: Object },
    presupuesto: { type: Object },
    fecha_inicial: { type: Date, required: true },
    fecha_final:{ type: Date, required: true },
    director: { type: Array },
    estado: { type: String, required: true }, // [EJECUCIÓN, INICIO, CIERRE]
    fase: { type: String }, // [INICIO, DESARROLLO, DOCUMENTACIÓN, ENTREGA, FINALIZACIÓN]
    avances: { type: Array },
    miembros: { type: Array }
});

const Proyecto = mongoose.model('Proyecto', ProyectoSchema);
module.exports = Proyecto;