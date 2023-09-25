//Desestructuracion o asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
    // rango: 'Soldado'
}

// const { nombre, edad, clave } = persona;
// const { nombre:nombre2 } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(nombre);
// console.log(clave);
// console.log(edad);

// const retornaPersona = ( usuario ) => {
//     const {nombre, edad , clave} = usuario
//     console.log(usuario);
//     console.log(edad, nombre , clave);
// }

const useContext = ( {clave, nombre, edad, rango = 'Capitan'} ) => {
    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.2585,
            lng: 14.3569
        }
    }
}

const {nombreClave, latlng} = useContext(persona);
const {lat, lng } = latlng;

console.log(nombreClave)
console.log(latlng)
console.log(lat, lng)
