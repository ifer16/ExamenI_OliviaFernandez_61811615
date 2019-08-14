const express = require('express');

const producto = require('../models/producto');

const app = express();

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('/Productos', (req, res) => {

    producto.find({}, (err, producto) => {

        if (err) return res.status(500).send({ message: `Error al realizar la peticion` })
        if (!producto) return res.status(404).send({ message: `No existen ningun  productos` })

        res.send(200, { producto })
    })
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método post para producto (Valor 5 puntos)

app.post('/Productos', (req, res) => {
    let body = req.body;

    let producto = new producto({
        nombre: body.nombre,
        precio: body.precio,
        date: body.date,
    })
});

producto.save((err, productoDB) => {
    if (err) {
        res.status(400).json({
            ok: false,
            err
        })
    }
    res.json({
        ok: true,
        producto: productoDB
    })
});

module.exports = app;