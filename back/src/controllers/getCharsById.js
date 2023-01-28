const toJSON = require('../utils/toJSON');

const getCharById = (res, id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then((data)=>{
            var obj = {
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species
            }

            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(toJSON(obj));
        })
        .catch((error)=>{
            res.writeHead(500, {'Content-Type':'text/plain'})
            res.end(error.message)
        })
}

module.exports = getCharById;