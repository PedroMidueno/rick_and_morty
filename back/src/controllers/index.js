const axios = require('axios')


const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(data => data.data)
        .then((data) => {
            const char = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                id: data.id
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(char));
        })
        .catch((error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end(error.message)
        })
}

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(data => data.data)
        .then((data) => {
            const char = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                id: data.id,
                status: data.status,
                origin: data.origin
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(char));
        })
        .catch((error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end(error.message)
        })
}



module.exports = {
    getCharById,
    getCharDetail
};