const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/clientes_db')
.then(console.log('Conectando a Mongodb...'))
.catch(err => console.log("Error al intentar conectar con Mongodb."));