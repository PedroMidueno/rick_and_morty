const axios = require('axios')

var favorites = []

const getCharById = async (req, res) => {

    const { id } = req.params;

    try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const characterApi = response.data;

        const char = {
            image: characterApi.image,
            name: characterApi.name,
            gender: characterApi.gender,
            species: characterApi.species,
            id: characterApi.id
        }
        res.status(200).end(JSON.stringify(char));

    } catch (error) {
        res.status(500).end(error.message)
    }
}

const getCharDetail = async (req, res) => {

    const { detailId } = req.params;

    try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const characterApi = response.data;

        const char = {
            image: characterApi.image,
            name: characterApi.name,
            gender: characterApi.gender,
            species: characterApi.species,
            id: characterApi.id,
            status: characterApi.status,
            origin: characterApi.origin
        }

        res.status(200).json(char);

    } catch (error) {
        res.status(500).end(error.message)
    }


}

/*
si favorites fuera una DB de verdad

const getFav = async (req, res) => {
    try {
        const favorites = await Favorites.findAll()
        res.status(200).json(favorites)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
*/

const getFav = (req, res) => {
    res.status(200).end(JSON.stringify(favorites))
}

const postFav = (req, res) => {
    favorites.push(req.body);
    res.status(200).end(JSON.stringify(req.body))
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    const character = favorites.find((char) => char.id === Number(id))

    if (character) {
        favorites = favorites.filter(char => char.id !== Number(id));        
        res.status(200).end(JSON.stringify(character))
    } else {
        res.status(400).end("Este pesonaje no esta en favoritos")
    }
}



module.exports = {
    getCharById,
    getCharDetail,
    getFav,
    postFav,
    deleteFav,
};