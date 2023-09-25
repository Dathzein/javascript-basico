import { getHeroeById, getHeroesByOwner } from './bases/08-import-export'

//son asincronas

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {

//         const hero = getHeroeById(1)
//         resolve( hero );
//         reject( 'No se puso encontrar un heroe' );
//     }, 2000);
// } );

// promesa.then( ( hero ) => {
//     console.log('Heroe: ' , hero);
// }).catch(err => {
//     console.warn(err)
// })

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById( id )
            if( hero ){
                resolve( hero );
            }else{
                reject( 'No se pudo encontrar un heroe.' );
            }
        }, 2000);
    } );

}

getHeroByIdAsync(4)
.then( console.log )
    .catch( console.warn );
