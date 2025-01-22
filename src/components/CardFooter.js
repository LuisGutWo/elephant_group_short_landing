import React from 'react'
import { PiPhoneCallFill } from 'react-icons/pi'
import { HiMiniMapPin } from 'react-icons/hi2'

const CardFooter = () => {
  return (
    <>
      <article className="buttons-footer-zone animate__animated animate__fadeIn">
        <div className="buttons-border-second-zone m-0 d-flex justify-content-center flex-row align-items-center animate__animated animate__fadeIn">
          <a href="tel:+56951631370" className="flat-button-footer">
            <div className="ico">
              <PiPhoneCallFill />
            </div>
            <div className="text-inner-button-footer">
              <h4>
                <b>LLÁMANOS</b>
              </h4>
            </div>
          </a>
        </div>
        <div className="buttons-border-second-zone m-0 d-flex justify-content-center flex-row align-items-center animate__animated animate__fadeIn">
          <a
            href="https://maps.app.goo.gl/pPMYMQnn36QWaSK26"
            target="_blank"
            rel="noopener noreferrer"
            className="flat-button-footer"
          >
            <div className="ico">
              <HiMiniMapPin />
            </div>
            <div className="text-inner-button-footer">
              <h4>
                <b>UBICACIÓN</b>
              </h4>
            </div>
          </a>
        </div>
      </article>
    </>
  )
}

export default CardFooter
