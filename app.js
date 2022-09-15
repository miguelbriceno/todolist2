// Servidor para aplicación de notas

// Requerir librerias necesarias.
const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
// const https = require("https");

//Inicializacion de Servidor
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Ruta raiz
app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
})

//Configuracion de puerto escucha del Servidor
app.listen(3000, ()=>{
  console.log("Servidor escuchando en el puerto de pruebas 3000.".bgWhite.blue);
});
