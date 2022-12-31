import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form/Form';


export default function App() {

  const [characters, setCharacters] = useState([])

  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender:'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let existe = characters.find((elem) => elem.id === data.id);
          if (existe) {
            window.alert("Ya se agregó este personaje");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }

        } else {
          window.alert('No hay personaje con ese ID')
        }
      });

  }


  function onClose(id) {
    setCharacters((data) => { //data es igual a characters
      return data.filter((elem) => elem.id !== id)
    })
  }



  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
        />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}


