// Servidor para aplicación de notas

// Requerir librerias necesarias.
const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
const date = require(__dirname + "/date.js"); // Este es un modulo local creado por mi.

//Variables de pruebas
const hour = new Date().getHours();
const min = new Date().getMinutes();
const day = date.date();

//Almacenes de notas
const nuevosItems = [];
const workItems = [];

//Inicializacion de Servidor
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

//Ruta raiz
app.get("/", (req, res)=>{
  res.render("list", {horaActual:hour, minutoActual:min, listTittle:day, newListItems:nuevosItems});
})

//Ruta work
app.get("/work", (req, res)=>{
  res.render("list", {horaActual:hour, minutoActual:min, listTittle:"Work", newListItems:workItems});
})

app.get("/about", (req, res)=>{
  res.render("about");
});

//Post de home
app.post("/", (req, res)=>{
  console.log(req.body.listName);

  //Condicional que verifica de donde viene el post usando el titulo de la nota.
  if (req.body.listName == "Work"){
    workItems.push(req.body.newItem);
    res.redirect("/work");
  }else{
    nuevosItems.push(req.body.newItem);
    //Como respuesta al POST, se "redirige" al usuario al home, pero ya se ha capturado el valor ingresado en el input.
    res.redirect("/");
  }
});

//Configuracion de puerto escucha del Servidor
app.listen(3000, ()=>{
  console.log("Servidor escuchando en el puerto de pruebas 3000.".bgWhite.blue);
});
