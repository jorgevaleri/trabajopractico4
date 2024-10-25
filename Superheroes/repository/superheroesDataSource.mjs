export default class SuperheroesDataSource {
    //METODO ABSTRACTO PARA OBTENER TODOS LOS SUPERHEROES
    obtenerTodos() {
        throw new Error('Este método debe ser implementaod por la subclase');
    }
}