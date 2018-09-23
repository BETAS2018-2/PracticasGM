
const colors = require('colors');
const fs = require('fs');

let crear = (data) =>{  
    fs.writeFile('data.jason', JSON.stringify(data, undefined, 2), (err)=>{
        if(err) {
            console.log(err.red)
        } else {
            console.log("Se creo el archivo".blue)
        }
    });
}

let cargarArchivo = ()=>{
    try {
        return require('./data.jason');
    } catch (err){
        return { alumnos: []}
    }
}

let agregarAlumno = (alumno) =>{
    let archivo = cargarArchivo();
    archivo.alumnos.push(alumno);
    crear(archivo);
    console.log(`se ha agregado el alumno ${alumno}`.yellow);
}

module.exports = {
    crear,
    agregarAlumno
}