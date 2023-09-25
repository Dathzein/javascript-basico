
const activo = true;

// let mensaje = '';

// if(activo){
//     mensaje = 'activo'
// }else
// {
//     mensaje = 'inactivo'
// }

// const mensaje = (activo) ? 'Activo' : 'Inactivo';
const valor = () => console.log('Ave Maria')
const mensaje = activo && valor(); //evaluar true
const mensaje2 = !activo || valor(); //evaluar false

// console.log(mensaje)