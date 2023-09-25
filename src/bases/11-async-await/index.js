

const getImagen = async () => {

    try {
        const apiKey = 'oUAHCCdshcnw8LSnWsDWBwQIjq6ORfUB';

        const urlBase = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

        const res = await fetch(urlBase);
        const { data } = await res.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)

    } catch (error) {
        console.warn(error)
    }



}

getImagen();
