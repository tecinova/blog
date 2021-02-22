import React from "react"
import Title from "../Title"
import styled from "styled-components"

const MapContact = () => {
  return (
    <section>
      <Title title="Atendemos remoto" subtitle="" />
      <MapWrapper>
        <iframe
          id="maps_frame"
          title="change-maps"
          frameBorder="0"
          width="100%"
          height="350px"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31754807.905689366!2d-69.7348268146283!3d-13.699099774300885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1614002813291!5m2!1spt-BR!2sbr"
          aria-label="Brasil"
        ></iframe>
      </MapWrapper>
    </section>
  )
}

const MapWrapper = styled.div`
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};

  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
  }
`

export default MapContact
