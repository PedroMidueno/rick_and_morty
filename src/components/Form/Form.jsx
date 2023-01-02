import React, { useState } from 'react';
import styles from './Form.module.css';


export default function Form(props) {

    const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=\w*[A-Z])(?=\w*\d)\S{6,10}$/;

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    function handleInputChange(event) {
        if (event.target.name === "username") {
            setUserData({
                ...userData,
                username: event.target.value
            })
        } else if (event.target.name === "password") {
            setUserData({
                ...userData,
                password: event.target.value
            })
        }

        setErrors(
            validateInputs({
                ...userData,
                [event.target.name]: event.target.value
            })
        )



    }

    function validateInputs(inputs) {
        let errors = {};

        if (!regexUsername.test(inputs.username)) {
            errors.username = 'Ingrese un correo válido'
        }

        if (!regexPassword.test(inputs.password)) {
            errors.password = 'Formato de contraseña incorrecto'
        }

        return errors;
    }

    function handleSubmit(userData) {
        props.login(userData);
    }

    function presionar_enter(event) {
        let tecla = event.keyCode

        if (tecla === 13) {
            document.getElementById('botonIngresar').click()
        }
    }

    window.onkeydown = presionar_enter;

    return (

        <div>
            <div className={styles.cabecera}></div>

            <div className={styles.divForm}>

                <h2 className={styles.titulo}>Ingrese usuario y contraseña</h2>

                <div className={styles.divUsuario}>
                    <label htmlFor="usuario" className={styles.labelUsuario}>Usuario:</label>
                    <input type="text" id='usuario' name='username' value={userData.username}
                        onChange={handleInputChange} className={styles.inputUsuario} />
                    <p className={styles.errorUsuario}>{errors.username}</p>
                </div>

                <div className={styles.divContra}>
                    <label htmlFor="contraseña" className={styles.labelContra}>Contraseña:</label>
                    <input type="password" id='contraseña' name='password' value={userData.password}
                        onChange={handleInputChange} className={styles.inputContra} />
                    <p className={styles.errorContra}>{errors.password}</p>
                </div>

                <button className={styles.botonIngresar} id='botonIngresar' onClick={() => handleSubmit(userData)}>Ingresar</button>

            </div>
        </div>

    )
}
