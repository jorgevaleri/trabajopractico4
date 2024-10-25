//EXPORTA LA FUNCION Y RECIBE COMO PARAMETRO UN OBJETO
export function renderizarSuperheroe(superheroe){
    return JSON.stringify(superheroe, null, 2); //CONVIERTE EL OBJETO A JSON, SIN REALIZAR ACCION EN LAS CLAVES, Y DEFINE EL NIVEL DE IDENTACION DE 2 ESPACIOS.
}

export function renderizarListaSuperheroes(superheroes){
    return JSON.stringify(superheroes, null, 2);
}