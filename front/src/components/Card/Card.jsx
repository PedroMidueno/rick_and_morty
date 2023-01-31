import React, { useState, useEffect } from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import { deleteFavorite, addFavorite } from "../../redux/actions/actions";
import { connect } from "react-redux";

function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const propsToSend ={
      id: props.id,
      name: props.name,
      species: props.species,
      gender: props.gender,
      image: props.image,
      onClose: props.onClose
   }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.deleteFavorite(props.id)
      } else {
         setIsFav(true);
         props.addFavorite(propsToSend)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }      
      });
   }, [props.myFavorites, props.id])

   return (
      <div className={styles.card} title={`Personaje: ${props.id}`}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={styles.botonFavorito}
                  title="Quitar de favoritos">❤️</button>
            ) : (
               <button onClick={handleFavorite} className={styles.botonFavorito}
                  title="Añadir a favoritos">🤍</button>
            )
         }
         <button className={styles.botonCerrar} onClick={() => {
            props.deleteFavorite(props.id);
            props.onClose()            
         }} title="Cerrar">X</button>

         <div className={styles.divNombre}>
            <Link to={`/detail/${props.id}`}>
               <h2 className={styles.nombre}>{props.name}</h2>
            </Link>
         </div>

         <div className={styles.pie}>
            <h2 className={styles.especie}>{props.species}</h2>
            <h2 className={styles.genero}>{props.gender}</h2>
         </div>

         <div className={styles.divImg}>
            <Link to={`/detail/${props.id}`}>
               <img className={styles.img} src={props.image} alt={props.image} onError="this.src='../../../public/cargando.png';" />
            </Link>
         </div>


      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (char) => { dispatch(addFavorite(char)) },
      deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

