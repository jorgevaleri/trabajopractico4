import {obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, obtenerTodosLosSuperheroes} from '../services/superheroesService.mjs'; //IMPORTA FUNCIONES PARA OBTENCION DE DATOS
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs'; //IMPORTA FUNCIONES PARA TRANSFORMAR LOS DATOS EN UN FORMATO ADECUADO

//EXPORTA LA FUNCION PARA OBTENER SUPERHEROES POR ID
export function obtenerSuperheroePorIdController(req, res){
    const {id} = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));
    
    if (superheroe){
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send({mensaje: "Superhéroe no encontrado"});
    }
}

//EXPORTA LA FUNCION PARA OBTENER SUPERHEROES POR ATRIBUTO
export function buscarSuperheroesPorAtributoController(req, res){
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
    
    if (superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({mensaje: "No se encontraron superhéroes con ese atributo"});
    }
} 

//EXPORTA LA FUNCION PARA OBTENER SUPERHEROES CON EDAD MAYORES A 30
export function obtenerSuperheroesMayoresDe30Controller(req, res){
    const superheroes = obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}

//EXPORTA LA FUNCION PARA OBTENER TODOS LOS SUPERHEROES
export function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = obtenerTodosLosSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));
}