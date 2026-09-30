const eventImages = {
    reencontro: new URL('../assets/reencontro1.png', import.meta.url).href,
    encontro: new URL('../assets/encontro.png', import.meta.url).href,
    casais: new URL('../assets/cultodecasais.png', import.meta.url).href,
    celulas: new URL('../assets/celulas.png', import.meta.url).href,
    ceia: new URL('../assets/cultodeceia.png', import.meta.url).href,
};

export const mapEvent = (event) => {
    return {
        ...event,
        image: eventImages[event.image],
        categoryKey: event.category.toLowerCase(),
    };
};