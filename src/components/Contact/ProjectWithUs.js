import React from "react"
import styled from "styled-components"

const ProjectWithUs = () => {
  return (
    <ProjectWrapper>
      <div className="project_info">
        <h3>Inicie seu projeto conosco!</h3>
        <p>São no máximo dois cliques para falar com um dos nossos especialistas :)</p>
      </div>
      <div className="project_phones">
        <a href="https://roberto.tecinovaservicos.com.br/">Contato</a>
        <a href="https://tecinovaservicos.com.br/portfolio/">Portfolio</a>
      </div>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.section`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.mainWhite};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  .project_phones {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: ${props => props.theme.mainWhite};
      border: 2px solid ${props => props.theme.mainWhite};
      padding: 1rem;
      text-align: center;
      border-radius: 2rem;
      width: 150px;
      margin-top: 1rem;
      transition: ${props => props.theme.mainTransition};

      &:hover {
        background: ${props => props.theme.mainWhite};
        color: ${props => props.theme.primaryColor};
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 760px) {
    flex-direction: row;
  }
`

export default ProjectWithUs
