const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./api/alumnos.js')(app);

let server = app.listen(port,()=>{
    console.log(`El servidor está corriendo en el puerto ${server.address().port} `);
});

