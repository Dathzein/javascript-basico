const apiKey = 'oUAHCCdshcnw8LSnWsDWBwQIjq6ORfUB';

const url =  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(url);

peticion.then(res => res.json() )
.then(({data} )=>{
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img )
})
.catch(console.warn)