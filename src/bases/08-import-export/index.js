import  heroes, { owners } from '../../data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find((element) => element.id == id);
// };

// const getHeroeById = (id) => {
//     return heroes.find((element) => {
//         if(element.id == id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// };
//fiund retorna solo 1
export const getHeroeById = (id) => heroes.find( element => element.id === id);

// console.log(getHeroeById(2));
//filter retornan todos, tambien es case sensitive
export const getHeroesByOwner = ( owner ) => heroes.filter( element => element.owner === owner);

// console.log(getHeroesByOwner('Marvel'));
// console.log(owners);
