const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1234567,
        lat: '26.3253364',
        lng: '12.1213123',
    }
};

// console.table( persona ); 
console.log( persona ); 

//Asignacion de referencias
const persona2 = {...persona};
//No se puede hacer porque puede generar problemas y no acepta en react
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)