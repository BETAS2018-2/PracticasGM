
let alumnos = [
    {
        id: 1,
        nombre: "Miguel",
        cal: 10,
        materias: 7
    },
    {
        id: 2,
        nombre: "Juan",
        cal: 5,
        materias: 5
    },
    {
        id: 3,
        nombre: "Antonio",
        cal: 3,
        materias: 6
    }
];

let getAlumnos= (materias, callback) => {
    let materia = alumnos.find((mat) =>{
        return mat.materias === materias;
    });

    if(!materia){
        callback(`El alumno con el numero de materias: ${materias} no ha sido encontrado`, null);
    }else{
        callback(null, materia.nombre);
    }
}

getAlumnos(5,(err, materia)=>{
    if(err) return console.log(err);
    console.log(materia);
});