import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/elephant_group_logo.png'
import './index.scss'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { BsEnvelopeArrowUp } from 'react-icons/bs'
import { GiRolledCloth } from 'react-icons/gi'
import { PiPhoneCallFill } from 'react-icons/pi'
import { FiMapPin } from 'react-icons/fi'

function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone m-0 animate__animated animate__fadeIn">
          <h1>
            Todo sobre <b>Elephant Group</b> en un solo lugar:
            <br />
            ¡Contáctanos y conoce nuestros servicios!
            <br />
            <img src={LogoTitle} alt="Logo Elephant Group" />
            <br />
            Letreros, señaleticas y adhesivos hechos a medida,
            <br />
            con precisión, calidad y rapidez garantizada.
          </h1>
        </div>

        <article className="buttons-border-zone mt-4 animate__animated animate__fadeIn">
          <div className="text-zone mt-4 d-flex justify-content-center flex-column align-items-center animate__animated animate__fadeIn">
            <a
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=56951631370&text=Hola"
              target="_blank"
              className="flat-button"
            >
              <div className="ico">
                <FontAwesomeIcon size="3x" icon={faWhatsapp} />
              </div>
              <span className="text animate__animated animate__fadeIn">
                WhatsApp
              </span>
            </a>
            <Link to="/contact" className="flat-button">
              <FontAwesomeIcon size="3x" icon={faInstagram} />
              <span className="text animate__animated animate__fadeIn">
                Instagram
              </span>
            </Link>
            <Link to="/contact" className="flat-button">
              <BsEnvelopeArrowUp className="icon" />
              <span className="text animate__animated animate__fadeIn">
                Correo
              </span>
            </Link>
            <Link to="/contact" className="flat-button">
              <GiRolledCloth className="icon" />
              <span className="text animate__animated animate__fadeIn">
                Catalogo
              </span>
            </Link>
          </div>
        </article>
        <article className="d-flex justify-content-center flex-row align-items-center animate__animated animate__fadeIn">
          <div className="buttons-border-zone mt-4 d-flex justify-content-center flex-column align-items-center animate__animated animate__fadeIn">
            <Link to="/contact" className="flat-button">
              <PiPhoneCallFill className="icon" />
              <span className="text-2 animate__animated animate__fadeIn">
                Llámanos
              </span>
            </Link>
          </div>
          <div className="buttons-border-zone mt-4 d-flex justify-content-center flex-column align-items-center animate__animated animate__fadeIn">
            <Link to="/contact" className="flat-button">
              <FiMapPin className="icon" />
              <span className="text-2 animate__animated animate__fadeIn">
                Ubicación
              </span>
            </Link>
          </div>
        </article>
        <footer>Desarrollador Front-End</footer>
      </div>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
