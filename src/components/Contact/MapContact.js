import React from "react"
import Title from "../Title"
import styled from "styled-components"

const MapContact = () => {
  return (
    <section>
      <Title title="Atendemos remotamente" subtitle="" />
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
          src="https://www.google.com/maps/place/Brasil/@-13.702797,-69.6865109,4z/data=!3m1!4b1!4m5!3m4!1s0x9c59c7ebcc28cf:0x295a1506f2293e63!8m2!3d-14.235004!4d-51.92528"
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
