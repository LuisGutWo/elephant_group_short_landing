import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { GiRolledCloth } from 'react-icons/gi'
import { TfiEmail } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
const catalogoPDF = `${process.env.PUBLIC_URL}/catalogo_impresion.pdf`

const CardBody = () => {
  return (
    <>
      <article className="buttons-border-zone mt-4 animate__animated animate__fadeIn">
        <div className="text-zone d-flex justify-content-center flex-column align-items-center animate__animated animate__fadeIn">
          <a
            rel="noreferrer"
            href={
              typeof window !== 'undefined' &&
              window.location.href !== undefined
                ? 'https://api.whatsapp.com/send?phone=56951631370&text=Hola'
                : ''
            }
            target="_blank"
            className="flat-button"
            style={
              typeof window !== 'undefined' &&
              window.location.href !== undefined
                ? {}
                : { pointerEvents: 'none' }
            }
          >
            <div className="ico">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className="text-inner-button">
              <h2 className="text animate__animated animate__fadeIn">
                WHATSAPP
              </h2>
              <h4>
                <b>¡COTIZA AHORA!</b>
              </h4>
            </div>
          </a>
          <a
            href={
              typeof window !== 'undefined' &&
              window.location.href !== undefined
                ? 'https://www.instagram.com/elephantgroupchile/'
                : ''
            }
            className="flat-button"
            target="_blank"
            rel="noopener noreferrer"
            style={
              typeof window !== 'undefined' &&
              window.location.href !== undefined
                ? {}
                : { pointerEvents: 'none' }
            }
          >
            <div className="ico">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="text-inner-button">
              <h2 className="text animate__animated animate__fadeIn">
                INSTAGRAM
              </h2>
              <h4>
                <b>MIRA NUESTROS TRABAJOS RECIENTES</b>
              </h4>
            </div>
          </a>
          <Link
            to="/contact"
            className="flat-button"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="ico">
              <TfiEmail />
            </div>
            <div className="text-inner-button">
              <h2 className="text animate__animated animate__fadeIn">
                CORREO ELECTRÓNICO
              </h2>
              <h4>
                <b>ESCRÍBENOS TUS CONSULTAS</b>
              </h4>
            </div>
          </Link>
          <a
            href={catalogoPDF}
            className="flat-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ico">
              <GiRolledCloth />
            </div>
            <div className="text-inner-button">
              <h2 className="text animate__animated animate__fadeIn">
                CATALOGO DE SERVICIOS
              </h2>
              <h4>
                <b>DESCUBRE NUESTROS PRODUCTOS</b>
              </h4>
            </div>
          </a>
        </div>
      </article>
    </>
  )
}

export default CardBody
