import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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

  const location = useLocation();

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = 'yo@henry.mx';
  const password = 'Henry33b';

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    } else {
      window.alert('El usuario y/o contraseña son incorrectos')
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Form
          login={login}
        />} />
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


