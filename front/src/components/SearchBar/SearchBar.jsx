import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {

   const [character, setCharacter] = useState('')

   const handleInput = (event) => {
      setCharacter(event.target.value);
   }

   function limpiar() {
      const texto = document.getElementById('write');
      texto.value = ""
   }

   function presionar_enter(event){
      let tecla = event.keyCode
  
      if(tecla === 13){
        document.getElementById('boton').click()
      }  
    }
  
    window.onkeydown = presionar_enter;
  

   return (
      <div className={styles.searchBar}>
         <input type='text' name='search' id='write' placeholder='Escibe un ID' className={styles.barraBusqueda}
            onChange={handleInput} />

         <button id='boton' className={styles.botonBuscar} onClick={() => {
            props.onSearch(character);
            limpiar();
         }}>Agregar</button>
      </div>
   );
}
