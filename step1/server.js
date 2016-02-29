var express = require('express');

// Crear aplicación del servidor.
var app = express();

// Puerto donde va a correr el servidor.
var port = 8000;

// Conseguir la lista de todos los contactos.
app.get('/', function (req, res) {

    res.status(200).send("Hello world" );
});

// Iniciar el servidor.
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log('Servidor corriendo en http://127.0.0.1:'+ port);
});
