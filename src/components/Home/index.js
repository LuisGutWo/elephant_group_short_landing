import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/elephant_group_logo.png'
import './index.scss'
import 'animate.css'

const Home = () => {
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

          <Link to="/contact" className="flat-button">
            CONTÁCTEME
          </Link>
          <Link to="/contact" className="flat-button">
            CONTÁCTEME
          </Link>
          <Link to="/contact" className="flat-button">
            CONTÁCTEME
          </Link>
          <Link to="/contact" className="flat-button">
            CONTÁCTEME
          </Link>
          <h2>Desarrollador Front-End</h2>
        </div>
      </div>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
