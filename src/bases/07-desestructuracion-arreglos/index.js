const personjes = ['Goku', 'Vegeta','Trunks'];

// console.log(personjes[0]);
// console.log(personjes[1]);
// console.log(personjes[2]);

// const [ p1 ] = personjes;
const [  , ,p1 ] = personjes;

console.log( p1 );


const retornaArreglo = ( ) => {
    return ['Abc', 123];
}

// const arr = retornaArreglo();
// console.log(arr)

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola mundo')} ]
} 

// const arr = useState('Gohan Definitivo');
// console.log(arr)
const [ nombre, setNombre ] = useState('Gohan Definitivo');
console.log(nombre)
setNombre()
