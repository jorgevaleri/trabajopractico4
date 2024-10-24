export default class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder = [], habilidadEspecial, aliado = [], enemigo = [])
    {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal =  nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
    
    //Método para agregar un nuevo poder al superhéroe
    agregarPoder(poder){
        this.poder.push(poder)
    }

    //Metodo para agregar un aliado
    agregarAliado(aliado){
        this.aliado.push(aliado);
    }

    //Metodo para agregar un enemigo
    agregarEnemigo(enemigo){
        this.enemigo.push(enemigo);
    }
}