import React, { useEffect } from "react";
import styles from './Favorites.module.css'
import { connect } from "react-redux";
import { orderCards, filterCards, showAll } from "../../redux/actions/actions";


function Favorites({ myFavorites, filterCards, orderCards, showAll }) {

    useEffect(() => {
        return showAll()
    }, [])

    return (
        <>

            <div className={styles.selectorContainer}>
                <label htmlFor="orderSelector" className={styles.labelOrder}
                >Ordenar por ID:</label>
                <select name="selector" id="orderSelector" className={styles.selectorOrder}>
                    <option value="Default">Seleccione una opción</option>
                    <option value="Ascendente" onClick={(event) => {
                        orderCards(event.target.value)
                    }}>Ascendente</option>
                    <option value="Descendente" onClick={(event) => {
                        orderCards(event.target.value)
                    }}>Descendente</option>
                </select>
                <label htmlFor="typeSelector" className={styles.labelType}
                >Filtrar por:</label>
                <select name="selector" id="typeSelector" className={styles.selectorType}>
                    <option value="All" onClick={() => { showAll() }}>Mostrar todos</option>
                    <option value="Male" onClick={(event) => {
                        filterCards(event.target.value)
                        console.log("myFavorites en la option...", myFavorites)
                    }}>Male</option>
                    <option value="Female" onClick={(event) => {
                        filterCards(event.target.value)
                        console.log("myFavorites en la opction...", myFavorites)
                    }}>Female</option>
                    <option value="unknown" onClick={(event) => {
                        filterCards(event.target.value)
                        console.log("myFavorites en la opction...", myFavorites)
                    }}>Unknown</option>
                    <option value="Genderless" onClick={(event) => {
                        filterCards(event.target.value)
                        console.log("myFavorites en la opction...", myFavorites)
                    }}>Genderless</option>
                </select>
            </div>
            <div className={styles.favsContainer}>
                {myFavorites.length ? (
                    myFavorites.map((elem) => {
                        return (
                            <div className={styles.favContainer} key={elem.id} title={`Personaje: ${elem.id}`}>
                                <h2 className={styles.nombre}>{elem.name}</h2>
                                <img src={elem.image} alt={elem.image} className={styles.imagen} />
                            </div>
                        );
                    })
                ) : (
                    <h2 className={styles.noFav}>Nada para mostrar aqui.</h2>
                )

                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterCards: (status) => { dispatch(filterCards(status)) },
        orderCards: (id) => { dispatch(orderCards(id)) },
        showAll: () => { dispatch(showAll()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);