import express from 'express';
import {obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosLosSuperheroesController} from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

//Rutas
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);
app.get('/superheroes', obtenerTodosLosSuperheroesController); //Ruta para obtener todos los superhéroes

//Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});