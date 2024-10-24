import {obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, obtenerTodosLosSuperheroes} from '../services/superheroesService.mjs';
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';



export function obtenerSuperheroePorIdController(req, res){
    const {id} = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));
    
    if (superheroe){
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send({mensaje: "Superhéroe no encontrado"});
    }
}

export function buscarSuperheroesPorAtributoController(req, res){
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
    
    if (superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({mensaje: "No se encontraron superhéroes con ese atributo"});
    }
} 

export function obtenerSuperheroesMayoresDe30Controller(req, res){
    const superheroes = obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}

//Nueva funcion para ver todos los superhéroes
export function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = obtenerTodosLosSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));
}