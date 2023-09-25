//Coleccion de informacion una variable
// const myArray = new Array();
// const myArray = new Array(100);
const myArray = [1,2,3,4];
//No se usa push porque modifica la variable principal
// myArray.push(1);

let arreglo2 = [...myArray, 5];
// arreglo2.push(5)

const arreglo3 = arreglo2.map(x => {
    return x * 2;
});

console.log( myArray );
console.log( arreglo2 );
console.log( arreglo3 );