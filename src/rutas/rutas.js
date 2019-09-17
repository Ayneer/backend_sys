const express = require('express');
const rutas = express.Router();
const Cliente = require('../modelo/Cliente');


rutas.get("/clientes", async (req, res) => {

    const listaCliente = await Cliente.find({});

    if (listaCliente) {
        res.status(200).send({ clientes: listaCliente, estado: true, error: false });
    } else {
        res.status(400).send({ mensaje: "No hay clientes", estado: false, error: false, clientes: {} });
    }

});

rutas.post("/clientes", async (req, res) => {

    body = req.body;

    const cliente = await Cliente.findOne({ email: body.email });
    console.log(cliente);
    if (!cliente) {

        const newCliente = new Cliente();

        newCliente.primer_nombre = body.primer_nombre;
        newCliente.segundo_nombre = body.segundo_nombre;
        newCliente.primer_apellido = body.primer_apellido;
        newCliente.segundo_apellido = body.segundo_apellido;
        newCliente.direccion = body.direccion;
        newCliente.telefono = body.telefono;
        newCliente.fecha_nacimiento = body.fecha_nacimiento;
        newCliente.email = body.email;
        newCliente.ocupacion = body.ocupacion;
        newCliente.tipo_identificacion = body.tipo_identificacion;

        newCliente.save((err) => {
            if (err) {
                res.status(500).send({ mensaje: "Error al intentar crear el cliente", estado: false, error: true });
            } else {
                res.status(200).send({ mensaje: "Cliente creado con exito", estado: true, error: false });
            }
        });
    } else {
        res.status(200).send({ mensaje: "Ya esta registrado el cliente!", estado: false, error: false });
    }

});

rutas.put("/clientes/:_id", (req, res) => {

    Cliente.findByIdAndUpdate({ _id: req.params._id }, req.body, (error, doc) => {
        if (error) {
            res.status(500).send({ mensaje: "Error al intentar actualizar al cliente", estado: false, error: true });
        } else {
            if (doc) {
                res.status(200).send({ mensaje: "Cliente actualizado con exito!", estado: true, error: false });
            } else {
                res.status(400).send({ mensaje: "No existe algun cliente con ese id", estado: false, error: false });
            }
        }
    })
});

rutas.delete("/clientes/:_id", async (req, res) => {

    Cliente.findByIdAndDelete({ _id: req.params._id }, (error, doc) => {
        if (error) {
            res.status(500).send({ mensaje: "Error al intentar eliminar al cliente", estado: false, error: true });
        } else {
            if(!doc){
                res.status(400).send({ mensaje: "No existe algun cliente con ese id", estado: false, error: false });
            }else{
                res.status(200).send({ mensaje: "Cliente eliminado con exito!", estado: true, error: false });
            }
        }
    })
});

module.exports = rutas;