

let alumnos = [
    {
        id: 1,
        nombre: "Miguel",
        cal: 10,        
    },
    {
        id: 2,
        nombre: "Antonio",
        cal: 5
    },
    {
        id: 3,
        nombre: "Juan",
        cal: 3
    }
];
module.exports = (app) =>{
    app.get('/alumnos/calificacion/:id',(req,res)=>{
    
        let { id, nombre, apellido } = req.params;
    
       dato = alumnos.find(alumno => alumno.id == id);
        res.json({ calificacion: dato.cal});    
    });
    
    app.get('/alumnos/calificacion/:cal',(req,res)=>{
            
        res.send(calificacion);
    });
    
     app.get('/alumnos/nombres',(req,res)=>{
        res.json(alumnos);
     })
}


 
     
