import express from 'express'; //IMPORTAMOS EXPRESS
import {obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosLosSuperheroesController} from './controllers/superheroesController.mjs';

//CONFIGURACION DEL SERVIDOR
const app = express();
const PORT = 3005;

//RUTAS
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);
app.get('/superheroes', obtenerTodosLosSuperheroesController); //Ruta para obtener todos los superhéroes

//LEVANTA EL SERVIDOR EN EL PUERTO 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});