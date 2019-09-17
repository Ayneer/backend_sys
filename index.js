const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');
const app = express();
const rutas = require('./src/rutas/rutas');
require('./src/data');
const db = mongoose.connection;

app.set('PORT', process.env.PORT || 4000);

app.use(bodyParse.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/', rutas);

db.once('open', ()=>{
    console.log('Conexion a mongodb con exito!');
    app.listen(app.get('PORT'), ()=>{
        console.log("Server corriendo en http://localhost:"+app.get('PORT')+"/");
    });
});