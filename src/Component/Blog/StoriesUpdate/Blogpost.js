import React from 'react'
import styled from "styled-components"

function Blogpost({ title, bg, txtcolor }) {
  return (
    <Container bg={bg} txtcolor={txtcolor}>
      {title}
    </Container>
  )
}

export default Blogpost

const Container = styled.div`
height: 100px;
/* background-color: #212531; */
background-color: ${({ bg }) => bg};

color: ${({ txtcolor }) => txtcolor};
font-weight: 900;
margin-top: 30px;
justify-content: center;
display: flex;
align-items: center;
`

