//IMPORTA LA CLASE SUPERHEROESREPOSITORY
import SuperheroesRepository from '../repository/superheroesRepository.mjs';

//CREAMOS UNA INSTANCIA LLAMADA REPOSITORY
const repository = new SuperheroesRepository();

//EXPORTA LA FUNCION OBTENER SUPERHEROES POR ID
export function obtenerSuperheroePorId(id) {
    const superheroes = repository.obtenerTodos(); //LLAMA AL METODO OBTENER TODOS Y LE ASIGNA A SUPERHEROES
    return superheroes.find(hero => hero.id === id); //RETORNA EL SUPERHEROE QUE COINCIDA CON EL ID, SINO DEVUELVE UNDEFINED
}

//EXPORTA LA FUNCION BUSCAR POR ATRIBUTO
export function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero =>
        hero.hasOwnProperty(atributo) && String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
    ); //VERIFICA QUE EL SUPERHEROE TENGA EL ATRIBUTO ASIGNADO, LO CONVIERTE EN UN VALOR EN MINUSCULA Y VERIFICA SI SE ENCUENTRA.
}

//EXPORTA LA FUNCION SUPERHEROES MAYORES DE 30 AÑOS
export function obtenerSuperheroesMayoresDe30() {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => 
        hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2
    ); //VERIFICA SI CUMPLE LA CONDICION DE TENER MAS DE 30 AÑOS, PERTENECER A LA TIERRA, Y DEBE TENER POR LO MENOS 2 PODERES.
}

//Nueva funcion para ver todos los superhéroes
export function obtenerTodosLosSuperheroes() {
    return repository.obtenerTodos();
}