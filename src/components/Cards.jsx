import React from 'react';
import Card from './Card';


export default function Cards(props) {
   const { characters } = props;

   return <div>
      {
         characters.map((elem, i) => {
            return (
               <Card
                  key={i}
                  name={elem.name}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  species={elem.species}
                  gender={elem.gender}
                  image={elem.image} />
            );
         })
      }

   </div>;
}
