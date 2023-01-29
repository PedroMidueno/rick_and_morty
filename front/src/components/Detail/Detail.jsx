import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {

    const { detailId } = useParams();
    // const navigate = useNavigate();

    // function backToHome() {
    //     navigate("/home");
    // }

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/detail/${detailId}`)
            .then((response => response.json()))
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID')
            });
        return setCharacter({});
    }, [])

    return (
        <div className={styles.detalle}>
            <div className={styles.info}>
                <h1>Nombre:  <span className={styles.italica}>{character.name}</span> </h1>
                <h2>Estado:  <span className={styles.italica}>{character.status}</span></h2>
                <h2>Especie: <span className={styles.italica}>{character.species}</span> </h2>
                <h2>Género:  <span className={styles.italica}>{character.gender}</span></h2>
                <h2>Origen:  <span className={styles.italica}>{character.origin?.name}</span></h2>
            </div>

            <div className={styles.imagen}>
                <img src={character.image} alt={character.image} />
            </div>

        </div>

    )
}
