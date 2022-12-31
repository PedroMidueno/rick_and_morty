import React from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.boton} onClick={props.onClose}>X</button>

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
               <img className={styles.img} src={props.image} alt={props.image} />
            </Link>
         </div>


      </div>
   );
}

