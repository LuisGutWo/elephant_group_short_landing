import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/elephant_group_logo.png'
import './index.scss'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { GiRolledCloth } from 'react-icons/gi'
import { PiPhoneCallFill } from 'react-icons/pi'
import { FiMapPin } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Container className="container home-page">
        <header className="text-zone m-0 animate__animated animate__fadeIn">
          <h1>
            Todo sobre <b>Elephant Group</b> en un solo lugar:
            <br />
            <em>¡Contáctanos y conoce nuestros servicios!</em>
            <br />
            {LogoTitle && <img src={LogoTitle} alt="Logo Elephant Group" />}
            <br />
            <em>Letreros, señaleticas y adhesivos hechos a medida,</em>
            <br />
            <em>con precisión, calidad y rapidez garantizada.</em>
          </h1>
        </header>

        <article className="buttons-border-zone mt-4 animate__animated animate__fadeIn">
          <div className="text-zone d-flex justify-content-center flex-column align-items-center animate__animated animate__fadeIn">
            <a
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=56951631370&text=Hola"
              target="_blank"
              className="flat-button"
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
            <Link to="/contact" className="flat-button">
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
            </Link>
            <Link to="/contact" className="flat-button">
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
            <Link to="/contact" className="flat-button">
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
            </Link>
          </div>
        </article>
        <article className="d-flex justify-content-center flex-row align-items-center animate__animated animate__fadeIn">
          <div className="buttons-border-second-zone m-0 d-flex justify-content-center flex-row align-items-center animate__animated animate__fadeIn">
            <Link to="/contact" className="flat-button">
              <div className="ico">
                <PiPhoneCallFill />
              </div>
              <div className="text-inner-button">
                <h4>
                  <b>LLÁMANOS</b>
                </h4>
              </div>
            </Link>
          </div>
          <div className="buttons-border-second-zone m-0 d-flex justify-content-center flex-row align-items-center animate__animated animate__fadeIn">
            <Link to="/contact" className="flat-button">
              <div className="ico">
                <FiMapPin />
              </div>
              <div className="text-inner-button">
                <h4>
                  <b>UBICACIÓN</b>
                </h4>
              </div>
            </Link>
          </div>
        </article>
        <footer>
          <h3>3 Oriente 974 - Viña del Mar - Chile</h3>
          <br />
          <h3>+ 56 9 5163 1370 - (32) 350 7606</h3>
          <br />
          <h2> WWW.ELEPHANTGROUP.CL</h2>
        </footer>
      </Container>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
