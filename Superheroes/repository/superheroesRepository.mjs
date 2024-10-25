import fs from 'fs'; //IMPORTA EL MODULO fs DE NODE.JS, QUE PERMITE TRABAJAR CON EL SISTEMA DE ARCHIVOS.
import path from 'path'; //IMPORTA EL MODULO path, PARA MANEJAR Y CONSTRUIR RUTAS DE ARCHIVOS.
import {fileURLToPath} from 'url'; 
import SuperheroesDataSource from './superheroesDataSource.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperheroesFileRepository extends SuperheroesDataSource {
    constructor() {
        super();
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }

    obtenerTodos() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            return JSON.parse(data); //Convierte el archivo JSON en un array de objetos JS
        } catch (error) {
            console.error('Error leyendo el archivo de superhéroes:', error);
            return [];
        }
    }
}