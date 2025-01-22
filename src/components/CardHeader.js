import React from 'react'
import LogoTitle from '../../src/assets/images/elephant_group_logo.png'

export const CardHeader = () => {
  if (!LogoTitle) {
    return null
  }
  return (
    <>
      <header className="card-header animate__animated animate__fadeIn">
        <h1>
          Todo sobre <b>Elephant Group</b> en un solo lugar:
          <br />
          <em>¡Contáctanos y conoce nuestros servicios!</em>
          <br />
          <img src={LogoTitle} alt="Logo Elephant Group" />
          <br />
          <em>Letreros, señaleticas y adhesivos hechos a medida,</em>
          <br />
          <em>con precisión, calidad y rapidez garantizada.</em>
        </h1>
      </header>
    </>
  )
}
