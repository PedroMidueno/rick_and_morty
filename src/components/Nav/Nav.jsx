import React from 'react'
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from './Nav.module.css'
import { NavLink, useLocation } from 'react-router-dom';


export default function Nav(props) {

    const location = useLocation();

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

            <a href="">
                <span className={styles.logout}>Cerrar sesión</span>
            </a>

            <div className={styles.busqueda}>
            {location.pathname === "/home" && <SearchBar
                    onSearch={props.onSearch}
                />} 
                
            </div>
        </div>
    )
}
