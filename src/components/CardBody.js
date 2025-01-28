import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
const catalogoPDF = `${process.env.PUBLIC_URL || ''}/catalogo_impresion.pdf`

const CardBody = () => {
  const mailingSvg = (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 96.6 86.4"
    >
      <g id="JmIAzu_00000172434601513573875380000001789944392085879686_">
        <g>
          <path
            className="st0"
            d="M48.3,86.4c-12.8,0-25.6,0-38.5,0c-4.2,0-7.2-1.8-9-5.5c-0.5-1-0.8-2.3-0.8-3.4C0,62.8,0,48.1,0,33.4
			c0-4.7,4.1-8.8,8.8-8.9c0.3,0,0.7,0,1,0c25.6,0,51.3,0,76.9,0c4,0,7.1,1.7,8.9,5.3c0.6,1.1,0.9,2.5,0.9,3.8
			c0.1,14.6,0.1,29.2,0,43.8c0,4.8-3.9,8.8-8.7,9c-3.2,0.1-6.4,0.1-9.6,0.1C68.2,86.4,58.3,86.4,48.3,86.4z M85.8,30.5
			c-0.1-0.1-0.2-0.2-0.3-0.3c-24.8,0-49.7,0-74.5,0c-0.1,0.1-0.2,0.2-0.2,0.3c0.3,0.2,0.6,0.3,0.8,0.5c11.3,9.6,22.6,19.3,34,29
			c1.8,1.6,3.5,1.6,5.4,0c11.3-9.6,22.6-19.3,34-29C85.2,30.8,85.5,30.7,85.8,30.5z M10.7,80.7c25.2,0,50.1,0,75.2,0
			c-0.2-0.3-0.4-0.4-0.5-0.5c-8-6.8-16-13.6-24-20.5c-0.5-0.4-0.8-0.4-1.2,0c-1.8,1.6-3.6,3.1-5.4,4.6c-4,3.4-8.8,3.4-12.8,0
			c-1.7-1.5-3.5-2.9-5.2-4.4c-0.6-0.6-1-0.6-1.7,0c-7.8,6.7-15.6,13.3-23.4,19.9C11.4,80,11.1,80.3,10.7,80.7z M31.5,55.4
			c-8.6-7.3-17.1-14.6-25.8-22c0,14.8,0,29.2,0,43.9C14.4,70,22.9,62.8,31.5,55.4z M90.9,33.4c-8.7,7.4-17.2,14.7-25.8,22
			c8.6,7.3,17.1,14.6,25.8,21.9C90.9,62.6,90.9,48.2,90.9,33.4z"
          />
          <path
            className="st0"
            d="M45.5,6.2c0-1.1,0-2.3,0-3.4c0-1.6,1.2-2.7,2.8-2.7C49.8,0,51,1.2,51,2.7c0,2.4,0,4.7,0,7.1
			c0,1.6-1.3,2.8-2.8,2.8c-1.5,0-2.7-1.3-2.7-2.9C45.5,8.5,45.5,7.4,45.5,6.2z"
          />
          <path
            className="st0"
            d="M65.6,18.7c-1.4-0.1-2.3-0.5-2.8-1.5c-0.5-1-0.4-2.1,0.3-2.9c1.5-1.8,3.1-3.6,4.8-5.3
			c1.1-1.1,2.6-1.1,3.7-0.1c1,1,1.2,2.5,0.3,3.7c-1.5,1.8-3.2,3.6-4.8,5.3C66.6,18.4,65.9,18.6,65.6,18.7z"
          />
          <path
            className="st0"
            d="M30.9,18.7c-0.4-0.2-1.1-0.5-1.6-1c-1.5-1.6-3-3.2-4.4-4.9c-1.1-1.2-1-2.9,0.1-3.9c1.2-1.1,2.7-1,3.9,0.2
			c1.6,1.6,3.1,3.3,4.6,5c0.8,0.9,0.9,1.9,0.3,3C33.3,18.2,32.4,18.7,30.9,18.7z"
          />
        </g>
      </g>
    </svg>
  )
  const catalogoSvg = (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 92.7 92.8"
    >
      <path
        className="st0"
        d="M57.5,8.5C46.6,3.8,36.3,1.1,26.1,0.3C21.2,0,16.9-0.3,12.6,0.7c-4.7,1-7.8,2.6-10.3,5.1C0.7,7.3,0,9.1,0,11.2
	c0,23.5,0,46.9,0,70.4c0,1.7,0.5,3.2,1.5,4.6c1.3,1.7,3.1,3.1,5.5,4.2c5.3,2.4,11,3,17.4,1.9c3.5-0.6,6.3-1.7,8.8-3.5
	c2.5-1.8,3.9-3.7,4.2-6.1c0.1-0.5,0.1-1,0.1-1.6c0-0.3,0-0.7,0-1.1l0.1-1.3l1.2,0.4c1.3,0.4,2.6,0.8,3.9,1.2
	c2.7,0.9,5.6,1.7,8.2,2.9c12.3,5.3,23.8,8.3,35,9.2c1.7,0.1,3.4,0.2,5.3,0.3c0.5,0,1,0,1.4,0.1v-77c-0.4,0-0.7,0-1.1,0
	C79.6,15.5,68.1,13.1,57.5,8.5z M7.3,8.2C8.2,7.5,9.7,6.5,11.4,6c5.1-1.5,10.1-1.5,15.1,0.1c1.1,0.3,2.1,0.9,3,1.5
	c1.4,0.9,2.1,2.2,2,3.4c0,1.2-0.8,2.3-2.1,3.1c-1.7,1-3.7,1.6-5.7,2.2c-1,0.3-2,0.4-2.9,0.4c-0.3,0-0.7,0-0.9,0.1l-0.1,0h-0.1
	c-3.1,0-6.4-0.2-9.5-1.4c-1.2-0.5-2.3-1.1-3.1-1.9c-0.9-0.8-1.4-1.7-1.3-2.8C5.9,9.8,6.4,8.9,7.3,8.2z M28.4,85.9
	c-2.8,1.3-5.8,2-9.1,2c-1,0-2-0.1-3-0.2c-2.1-0.2-4.3-0.8-7.1-1.8c-1.6-0.5-3.4-1.9-3.4-5.3c0.1-15.1,0-30.6,0-45.4l0-16.3l1.4,0.5
	c7.8,3.1,15.3,3.1,23,0l1.4-0.5l0,16.3c0,14.9,0,30.4,0,45.5C31.7,83.2,30.6,84.9,28.4,85.9z M86.8,86.8l-1.2-0.2
	c-1.1-0.2-2.2-0.3-3.3-0.5c-2.4-0.4-4.7-0.7-7.1-1.2c-6.4-1.2-13.1-3.3-20.4-6.5c-4.7-2-9.7-3.7-15.4-5c-0.3-0.1-0.5-0.1-0.8-0.2
	L37.5,73V8.2l1.4,0.2c0.2,0,0.6,0.1,0.9,0.2c1.3,0.4,2.7,0.9,4,1.3c3.1,1,6.2,2,9.3,3.2c11,4.6,21.6,7.3,32.4,8.2
	c0.1,0,0.2,0,0.4,0.1l1,0.2V86.8z"
      />
    </svg>
  )

  return (
    <>
      <article className="buttons-border-zone animate__animated animate__fadeIn animate__delay-1s">
        <div className="text-zone animate__animated animate__fadeIn">
          <a
            rel="noreferrer"
            href={(() => {
              if (
                typeof window !== 'undefined' &&
                window.location.href !== undefined
              ) {
                return `https://api.whatsapp.com/send?phone=56951631370&text=¡Hola!%20Estoy%20interesado%20en%20más%20información%20sobre%20los%20servicios%20de%20Elephant%20Group.%20Me%20gustaría%20cotizar:%20-letreros,%20-señaléticas,%20-adhesivos,%20otros%20servicios.%20¿Podrías%20ayudarme?`
              }
              return ''
            })()}
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
          <a href="mailto:contacto@elephantgroup.cl" className="flat-button" rel="noopener noreferrer">
            <div className="ico">{mailingSvg}</div>
            <div className="text-inner-button">
              <h2 className="text animate__animated animate__fadeIn">
                CORREO ELECTRÓNICO
              </h2>
              <h4>
                <b>ESCRÍBENOS TUS CONSULTAS</b>
              </h4>
            </div>
          </a>
          <a
            href={catalogoPDF}
            className="flat-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ico">{catalogoSvg}</div>
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
