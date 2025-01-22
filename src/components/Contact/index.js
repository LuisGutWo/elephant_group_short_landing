import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        {/* <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Actualmente soy freelance y buscando también la oportunidad que me permita crecer como Front End, aprender a trabajar en la industria TI y adquirir nuevas habilidades y tecnologías.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Titulo o encabezado"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" onClick={handleShowEmailSend} />
                </li>
              </ul>
              <Modal show={showEmailSend} onHide={handleCloseEmailSend}>
                <Modal.Header closeButton>
                  <Modal.Body>
                    Correo Enviado! 🛸 <br /> Te responderemos de inmediato.
                    Gracias
                  </Modal.Body>
                </Modal.Header>
              </Modal>
            </form>
          </div>
        </div> */}
        <div className="info-map">
          Elephant Group
          <br />
          Viña del Mar, Chile
          <br />
          <span>contacto@elephantgroup.cl</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-33.011637, -71.545505]} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.011637, -71.545505]}>
              <Popup>Elephant Group</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Contact
