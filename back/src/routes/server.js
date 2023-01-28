const http = require('http');

const PORT = 3001;
const characters = require('../utils/data');

const error = (res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Route not found')
}

http.createServer((req, res) => {
    const allUrl = req.url.split('/')
    const id = Number(allUrl.pop())
    const url = allUrl.join('/')

    if (url === '/rickandmorty/character') {
        const character = characters.find((char) => {
            return char.id === id;
        })

        if (character) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(character))
        } else {
            error(res)
        }

    } else if (req.url === '/rickandmorty/characters') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(characters))
    } else {
        error(res)
    }
}).listen(PORT, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
})

