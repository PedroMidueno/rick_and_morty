import React from 'react';
import styles from './About.module.css';

export default function About() {



  return (
    <div className={styles.generalContainer}>
      <h1>Acerca de la App</h1>
      <div className={styles.acercaApp}>        
        <div className={styles.imgApp}>
          <img src='imgApp.PNG' alt="Imagen App" />
        </div>
        <div className={styles.appContent}>
          <p>
            Esta App, basada en la serie animada de “Rick & Morty”, es con la que puse en práctica los
            conocimientos adquiridos en el Bootcamp de desarrollo web Full Stack de la escuela online
            Soy Henry, en la primera edición de esta sección solamente está realizada la parte del frontend
            de esta aplicación web mientras sigo aprendiendo más acerca de este maravilloso mundo, así como
            aprendiendo también acerca del también interesante mundo del backend. <br />
            En el desarrollo de esta aplicación se pusieron en práctica temas como:
          </p>
          <ul>
            <li>HTML y CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
            <li>Componentes funcionales y de clase</li>
            <li>Estados en React y ciclos de vida de componentes</li>
            <li>Enrutado en React</li>
            <li>Formularios en React</li>
            <li>React trabajando en conjunto con Redux para tener estados globales</li>
            <li>Algunos de los Hooks mas usados en React</li>
            <li>Usos de herramientas de React como useEffect, usado este para "abreviar" de alguna manera
              los ciclos de vida de los componentes</li>
            <li>Entre otras cosas más...</li>
          </ul>
        </div>
      </div>
      <hr />
      <h1>Acerca del autor</h1>
      <div className={styles.acercaAutor}>        
        <div className={styles.imgAutor}>
          <img src='autorImg.jpg' alt='Imagen Autor' />
        </div>
        <div className={styles.autorContent}>
          <p>
            Mi nombre es <b><i>Pedro Midueño</i></b>, originario de la ciudad de Acapulco, Guerrero; México, a la fecha de
            edición de esta sección tengo 23 años y estoy cursando el Bootcamp de Desarrollo Web Full Stack en
            Henry. Desde que estaba cursando el bachillerato y tuve mis primeros acercamientos al mundo de la
            programación, me llamó mucho la atención aprender más de este ámbito, sin embargo y por motivos variados
            estudié mi carrera en un contexto completamente diferente, pero al término de mis estudios universitarios
            me dí cuenta de que aún me interesaba mucho el aprender a programar y en específico me interesaba mucho el
            desarrollo web, y era tanto mi interés que ni siquiera consideraba el dedicar mi vida laboral a otra cosa
            que no fuera la programación y  poder así seguir mis sueños, y es por eso que a día de hoy me encuentro
            estudiando en Henry, pues la propuesta que manejan me pareció muy interesante y ahora que estoy aprendiendo
            ésto me doy cuenta de que ha sido de las mejores decisiones el haber comenzado estudiar el Desarrollo web,
            pues antes solo era un gusto, pero poco a poco se va convirtiendo en una pasión y un estilo de vida, además
            que me ha ayudado a conocer grandes personas y a aprender que en comunidad se puede crecer muy rápido en
            esta industria TI.
          </p>
        </div>

      </div>
    </div>
  )
}
