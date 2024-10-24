export default class SuperheroesDataSource {
    //Método abstracto para obtener todos los superhéroes
    obtenerTodos() {
        throw new Error('Este método debe ser implementaod por la subclase');
    }
}