import React from 'react'
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';


export default function Nav(props) {
    return (
        <div className={styles.navBar}>
            <div className={styles.linksContainer}>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to='/home' className={({ isActive }) =>
                            isActive ? styles.active : null

                        } ><span className={styles.textoLink} >Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) =>
                            isActive ? styles.active : null

                        }><span className={styles.textoLink}>About</span></NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.img}></div>

            <div className={styles.busqueda}>
                <SearchBar
                    onSearch={props.onSearch}
                />
            </div>
        </div>
    )
}
