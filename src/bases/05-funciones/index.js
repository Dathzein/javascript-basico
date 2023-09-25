//Funciones

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

//funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
} 

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// saludar = 30;

console.log(saludar('Vegeta'))
console.log(saludar2('Trunks'))
console.log(saludar3('Goku'))
console.log(saludar4())
// console.log(saludar)


// const getUser = () =>{
//     return {
//         uid:'ABC123',
//         username:'Neo'
//     };
// }

const getUser = () =>({
        uid:'ABC123',
        username:'Neo'
});

const user = getUser()

console.log(user);

// function getUsuarioActivo( nombre ) {
//     return {
//         uid:'123RTD',
//         username:nombre
//     }
// }

const getUsuarioActivo = ( nombre ) => ({
    uid:'123RTD',
    username:nombre
});

const usuarioActivo = getUsuarioActivo('Yohan');

console.log(usuarioActivo)