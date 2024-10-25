//DEFINICION DE LA CLASE SUPERHEROE
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
    
    //METODO PARA AGREGAR UN NUEVO PODER AL SUPERHEROE
    agregarPoder(poder){
        this.poder.push(poder)
    }

    //METODO PARA AGREGAR UN ALIADO
    agregarAliado(aliado){
        this.aliado.push(aliado);
    }

    //METODO PARA AGREGAR UN ENEMIGO
    agregarEnemigo(enemigo){
        this.enemigo.push(enemigo);
    }
}