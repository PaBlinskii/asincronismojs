const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then( data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then( data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then( data => {
        console.log(data.dimension)
        // return fetchData(data.dimension)
    })
    .catch( err => console.error(err));

    // Las Promesas son las mas usadas hoy en día
    // Las ventajas son que nos permite gran capacidad de trabajar con asincronismo
    // Las desventajas es que no maneja excepciones y hay un catch al final, hay que tener cuidado si no retornamos el siguiente llamado...
    // Para que funcione en todos los navegadores hay que usar un transpilador como BABEL