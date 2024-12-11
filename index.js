// esto me trae express para usarlo
const express = require("express");

// me crea una variable para express
const app = express();
// definios el puerto
PORT = 3000;
// configuramos el puerto
app.set("port",PORT);

//define ruta y un verbo HTTP , (req , res ) es lo que recibimos y lo que respondemos
app.get("hola ", (req,res)=>{
    res.send("hola mundo")
})

app.listen(PORT,()=>{
    console.log(`listening port${PORT}`)
})
