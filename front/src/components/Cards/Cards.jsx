import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';


export default function Cards(props) {
   const { characters } = props;

   return <div className={styles.tarjetas}>
      {
         characters.map((elem) => {
            return (
               <Card
                  key={elem.id}
                  id={elem.id}
                  name={elem.name}
                  onClose={()=>props.onClose(elem.id)}
                  species={elem.species}
                  gender={elem.gender}
                  image={elem.image} />
            );
         })
      }

   </div>;
}
