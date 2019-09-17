const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    tipo_identificacion: Number,
    email: String,
    primer_nombre: String,
    segundo_nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    direccion: String,
    telefono: Number,
    ocupacion: String,
    fecha_nacimiento: String
});

module.exports = mongoose.model('cliente_col', clienteSchema);