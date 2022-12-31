import React from 'react'

export default function Form() {
    return (
        <div>

            <div>
                <label htmlFor="usuario">Username:</label>
                <input type="text" id='usuario' name='username'/>
                <p>Error</p>
            </div>

            <div>
                <label htmlFor="contraseña">Password:</label>
                <input type="text" id='contraseña' name='password'/>
                <p>Error</p>
            </div>

            <button>Ingresar</button>

        </div>
    )
}
